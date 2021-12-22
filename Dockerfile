FROM node:12.18.4-alpine3.12 AS build
WORKDIR /app
COPY client/package*.json ./
RUN ["npm", "i"]
COPY ./client .
RUN ["npm", "run", "build"]


FROM ubuntu:20.04
SHELL [ "/bin/bash" ]
WORKDIR /app
RUN [ "apt", "update" ]
RUN [ "apt", "install", "-y", "gcc", "make", "curl", "git", "bison" ]
COPY ./scripts /app/scripts
RUN [ "/app/scripts/install" ]

WORKDIR /app/client
COPY --from=build /app/build /app/client

# WORKDIR /app/server
# COPY ./server/makefile .
# RUN [ "make", "prepare" ]
# COPY ./server/go.mod .
# COPY ./server/go.sum .
# RUN [ "go", "mod", "download" ]
# COPY ./server .
# COPY .env_rename_me /app/.env
# CMD [ "make", "run" ]

CMD [ "/app/scripts/entrypoint" ]