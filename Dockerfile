FROM node:16.17

COPY . ./var/www/html

EXPOSE 8080

ENTRYPOINT ["npx", "http-server", "/var/www/html"]