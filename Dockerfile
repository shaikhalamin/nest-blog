FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8080

RUN yarn run build

CMD [ "yarn","run","dev" ]