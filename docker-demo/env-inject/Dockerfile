FROM node:14.15.3-alpine as build-stage

ENV DOMAIN=https://xxx.com
ENV BUILD_ENV=test

RUN npm config set registry https://registry.npm.taobao.org

WORKDIR /
COPY . .
# RUN yarn install
# RUN yarn build:test

CMD ENV1=env1 DOMAIN=xxx npm start