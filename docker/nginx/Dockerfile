FROM nginx:1.16-alpine as base
COPY .deployment/docker/nginx/conf/nginx.conf /etc/nginx/nginx.conf
COPY .deployment/docker/nginx/conf/docker-entrypoint.sh /usr/local/bin
ENTRYPOINT [ "docker-entrypoint.sh" ]

FROM base as pccfront-unilae-nginx
COPY .deployment/docker/nginx/conf/default.conf /etc/nginx/conf.d/default.conf
