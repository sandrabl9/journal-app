FROM node:14.17.3-alpine AS pruebas-react
RUN apk add --update \
  python3 build-base ca-certificates git \
  && rm -rf /var/cache/apk/*
WORKDIR /home/app