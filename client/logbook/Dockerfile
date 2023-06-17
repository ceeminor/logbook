FROM node:alpine
LABEL author="chris.c.minor@gmail.com"

WORKDIR /client

COPY . .

RUN npm install

RUN npm run build
