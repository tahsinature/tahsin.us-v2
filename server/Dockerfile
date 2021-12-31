FROM golang:1.17.2-alpine3.14 AS build
WORKDIR /app
RUN [ "apk", "add", "curl" ]
RUN [ "apk", "add", "make" ]
COPY makefile .
RUN [ "make", "prepare" ]
COPY go.mod .
COPY go.sum .
RUN [ "go", "mod", "download" ]
COPY . .
RUN [ "go", "build", "-o", "build/app", "./pkg/main.go" ]

FROM golang:1.17.2-alpine3.14
WORKDIR /app
COPY --from=build /app/build/app .
CMD [ "./app", "-r" ]
