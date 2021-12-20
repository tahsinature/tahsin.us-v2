FROM node:12.18.4-alpine3.12 AS build
WORKDIR /app
COPY client/package*.json ./
RUN ["npm", "i"]
COPY ./client .
RUN ["npm", "run", "build"]

FROM nginx:1.20.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [nginx-debug, '-g', 'daemon off;']

# FROM golang:1.17.2-alpine3.14
# WORKDIR /app/server
# RUN [ "apk", "add", "curl" ]
# RUN [ "apk", "add", "make" ]
# COPY makefile .
# RUN [ "make", "prepare" ]
# COPY go.mod .
# COPY go.sum .
# RUN [ "go", "mod", "download" ]
# COPY . .
# CMD [ "make", "run" ]