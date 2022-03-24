FROM alpine:latest

RUN apk add nodejs npm

COPY ./../config/express/dev/entrypoint.sh /etc/express/config/entrypoint.sh

WORKDIR /opt/express-mariadb/src

ENTRYPOINT ["sh", "/etc/express/config/entrypoint.sh"]