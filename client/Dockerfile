FROM node:18.16.0-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]