FROM node:20-alpine

WORKDIR /app

COPY index.html server.js ./

ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}

EXPOSE 3000

CMD ["node", "server.js"]
