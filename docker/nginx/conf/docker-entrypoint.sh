#!/usr/bin/env sh

if [ -z "$GATEWAY_HOST" ]
then
      echo "\$GATEWAY_HOST not defined"
      exit 1
fi

if [ -z "$SSR_HOST" ]
then
      echo "\$SSR_HOST not defined"
      exit 1
fi

sed -i "s,\${GATEWAY_HOST},$GATEWAY_HOST,g" /etc/nginx/conf.d/default.conf
sed -i "s,\${SSR_HOST},$SSR_HOST,g" /etc/nginx/conf.d/default.conf

/usr/sbin/nginx -g 'daemon off;'
