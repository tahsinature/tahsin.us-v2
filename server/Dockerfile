FROM golang:1.17.2-alpine3.14
WORKDIR /app
RUN [ "apk", "add", "curl" ]
RUN [ "apk", "add", "make" ]
COPY makefile .
RUN [ "make", "prepare" ]
COPY go.mod .
COPY go.sum .
RUN [ "go", "mod", "download" ]
COPY . .

RUN wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub && \
echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories && \
apk add doppler

CMD [ "make", "run" ]
