FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY ./DIST .

EXPOSE 3050

CMD ["yarn","start"]