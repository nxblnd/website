FROM node:24.8-alpine3.21 AS builder

WORKDIR /build
ENV ASTRO_TELEMETRY_DISABLED=true

RUN apk add \
    rsvg-convert \
    imagemagick \
    pngcrush \
    fontforge \
    py3-fontforge \
    git \
    jc

COPY package.json package-lock.json ./
RUN npm ci

RUN mkdir -p ./src/assets/generated
COPY src/utils/build-time/ ./scripts/
RUN chmod +x ./scripts/*

COPY public/favicon.svg ./public/
RUN ./scripts/favicon.sh ./public

COPY src/assets/Alegreya-Regular.otf ./
RUN ./scripts/fontforgeRomans.py ./Alegreya-Regular.otf ./src/assets/generated/Alegreya-RomanNumerals.woff2

COPY .git/ ./.git/
RUN ./scripts/gitlogToJson.py ./src/assets/generated/gitlog.json

COPY public/ ./public/
COPY src/ ./src/
COPY astro.config.mjs tsconfig.json ./
RUN npm run build

FROM mcr.microsoft.com/playwright:v1.55.0 AS playwright
WORKDIR /site
ENV CI=true

COPY package.json package-lock.json playwright.config.ts ./
RUN npm ci

COPY tests/ ./tests/
COPY --from=builder /build/dist ./dist/
RUN npm run playwright:pdfgen

FROM caddy:2.9-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /build/dist /srv
COPY --from=playwright /site/public/generated /srv/generated/

