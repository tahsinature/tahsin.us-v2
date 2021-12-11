FROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
CMD [ "npm", "start" ]