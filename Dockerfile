FROM node:16-alpine AS build

RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

RUN npm install typescript -g

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./tslint.json .

RUN npm install --no-optional

COPY ./src ./src

RUN ["npm", "run", "build"]


FROM node:16-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/package.json ./

RUN npm install --only=production

EXPOSE 3000

ARG NODE=production
ENV NODE_ENV ${NODE}
ARG PORT=3000
ENV SERVER_PORT ${PORT}

CMD [ "node", "dist/index.js" ]