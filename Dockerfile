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
ENV CI=true

RUN apt-get update && apt-get install git

COPY package.json package-lock.json ./
RUN npm ci
RUN npx -y playwright install --with-deps

COPY --from=icon-builder /site/public public/
COPY . .
RUN npm run build
RUN npm run pdfgen

FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=site-builder /site/dist /srv
COPY --from=site-builder /site/public/generated /srv/generated/

