FROM node:14.17-alpine as base
RUN apk add --update \
    python3 build-base \
    && rm -rf /var/cache/apk/*
ENV PROJECT_DIR=/home/node/app
ENV CI=$CI
USER node
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR
COPY --chown=node .npmrc .
COPY --chown=node package.json .
COPY --chown=node package-lock.json .
COPY --chown=node prepare.js .

ARG COMMIT=""
ARG STAGING=""
ARG LOGS=""
ARG SENTRY_TOKEN=""
ARG SENTRY_ORG=""
ARG SENTRY_PROJECT=""
ENV COMMIT_SHA=${COMMIT}
ENV IS_STAGING=${STAGING}
ENV LOGS_ENABLED=${LOGS}
ENV SENTRY_AUTH_TOKEN=${SENTRY_TOKEN}
ENV SENTRY_ORG_SLUG=${SENTRY_ORG}
ENV SENTRY_PROJECT_SLUG=${SENTRY_PROJECT}

FROM base as dev-dependencies
RUN npm ci
COPY --chown=node .eslintrc.json .
COPY --chown=node .ci.eslintrc.json .
COPY --chown=node .prettierrc .
COPY --chown=node jest.config.js .
COPY --chown=node src src
COPY --chown=node tsconfig.json .

COPY --chown=node webpack.config.js .
COPY --chown=node webpack.server.js .
COPY --chown=node webpack.client.js .
COPY --chown=node babel.config.js .


FROM dev-dependencies as build-ssr
RUN npm run build:ssr

FROM base as pccfront-unilae-ssr
RUN npm ci --production
COPY --from=build-ssr --chown=node $PROJECT_DIR/dist ./dist
CMD ["node", "./dist/server.js"]
