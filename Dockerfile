FROM alpine:3 AS assets-builder
WORKDIR /build

RUN apk add \
    rsvg-convert \
    imagemagick \
    pngcrush \
    fontforge \
    py3-fontforge \
    git \
    jc

RUN mkdir -p ./generated
COPY src/utils/build-time/ ./
RUN chmod +x ./*

COPY public/favicon.svg ./favicon/
RUN ./favicon.sh ./favicon

COPY src/assets/Alegreya-Regular.otf ./
RUN ./fontforgeRomans.py ./Alegreya-Regular.otf ./generated/Alegreya-RomanNumerals.woff2

COPY .git/ ./.git/
RUN ./gitlogToJson.py ./generated/gitlog.json

FROM node:24 AS site-builder
WORKDIR /site
ENV ASTRO_TELEMETRY_DISABLED=true

RUN apt-get update && apt-get install git

COPY package.json package-lock.json ./
RUN npm ci

COPY --from=assets-builder /build/favicon/ ./public/
COPY --from=assets-builder /build/generated/ ./src/assets/generated/
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
COPY --from=site-builder /site/dist ./dist/
RUN npm run playwright:pdfgen

FROM caddy:2.9-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=site-builder /site/dist /srv
COPY --from=playwright /site/public/generated /srv/generated/

