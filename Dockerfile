FROM node:12.18.4-alpine3.12 AS build
WORKDIR /app
COPY client/package*.json ./
RUN ["npm", "i"]
COPY ./client .
RUN ["npm", "run", "build"]


FROM golang:1.17.2-alpine3.14
WORKDIR /app
RUN [ "apk", "add", "curl" ]
RUN [ "apk", "add", "make" ]
COPY ./server/makefile .
RUN [ "make", "prepare" ]
COPY ./server/go.mod .
COPY ./server/go.sum .
RUN [ "go", "mod", "download" ]
COPY ./server .
COPY .env /app
COPY --from=build /app/build /app/pkg/public/app
CMD [ "make", "run" ]