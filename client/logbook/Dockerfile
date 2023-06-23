FROM node:alpine

LABEL author="Chris Minor <chris.c.minor@gmail.com>"

WORKDIR /client

COPY . .

RUN npm install

RUN npm run build
