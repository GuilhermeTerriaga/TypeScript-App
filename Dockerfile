FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY ./dist .

EXPOSE 3050

CMD ["yarn", "start"]