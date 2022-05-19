FROM node:14.17-alpine
RUN apk add --update \
    python3 build-base \
    && rm -rf /var/cache/apk/*
WORKDIR /home/app

COPY .npmrc .
COPY package.json .
COPY package-lock.json .
COPY prepare.js .
RUN npm ci

ARG COMMIT="default"
ARG STAGING="false"
ARG LOGS="false"
ARG SENTRY_TOKEN=""
ARG SENTRY_ORG=""
ARG SENTRY_PROJECT=""

COPY src src
COPY tsconfig.json .
COPY webpack.client.js .
COPY webpack.config.js .
COPY babel.config.js .

ENV COMMIT_SHA=${COMMIT}
ENV IS_STAGING=${STAGING}
ENV LOGS_ENABLED=${LOGS}
ENV SENTRY_AUTH_TOKEN=${SENTRY_TOKEN}
ENV SENTRY_ORG_SLUG=${SENTRY_ORG}
ENV SENTRY_PROJECT_SLUG=${SENTRY_PROJECT}

RUN npm run build:client
