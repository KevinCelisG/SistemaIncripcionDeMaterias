# syntax=docker/dockerfile:1

FROM node:lts-alpine3.16

WORKDIR /home/node/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npx prisma generate

CMD [ "npm", "start" ]