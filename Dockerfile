FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --ignore-engines

COPY . .

#EXPOSE 8080
EXPOSE 3000

RUN yarn run build

CMD [ "yarn","run","dev" ]