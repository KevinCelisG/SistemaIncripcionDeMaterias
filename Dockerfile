#Contruir proyecto nodejs
FROM node:latest AS build
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 4000
CMD [ "npm", "start" ]