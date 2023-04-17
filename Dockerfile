FROM node:18.16.0-alpine3.17 AS frontend
WORKDIR /app
COPY client/package*.json ./
RUN ["yarn", "install"]
COPY client .
COPY client/.env_rename_me .env
RUN ["yarn", "build"]



FROM golang:1.17.2-alpine3.14 AS backend
WORKDIR /app
RUN [ "apk", "add", "curl" ]
RUN [ "apk", "add", "make" ]
COPY server/makefile .
RUN [ "make", "prepare" ]
COPY server/go.mod .
COPY server/go.sum .
RUN [ "go", "mod", "download" ]
COPY server .
COPY --from=frontend /app/build /app/public
RUN [ "go", "build", "-o", "main", "./pkg/main.go" ]



FROM golang:1.17.2-alpine3.14
WORKDIR /app
COPY --from=backend /app .
COPY scripts/doppler /app/get-env

RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
apk add doppler

CMD [ "./main", "-r" ]
