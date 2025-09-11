FROM alpine:3 AS icon-builder
WORKDIR /site

RUN apk add \
    rsvg-convert \
    imagemagick \
    pngcrush

COPY public/favicon.svg ./public/
COPY favicon.sh ./
RUN chmod +x favicon.sh
RUN ./favicon.sh

FROM node:24 AS site-builder
WORKDIR /site
ENV ASTRO_TELEMETRY_DISABLED=true

RUN apt-get update && apt-get install git

COPY package.json package-lock.json ./
RUN npm ci

COPY --from=icon-builder /site/public public/
COPY public/ ./public/
COPY src/ ./src/
COPY .git/ ./.git/
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

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=site-builder /site/dist /srv
COPY --from=playwright /site/public/generated /srv/generated/

