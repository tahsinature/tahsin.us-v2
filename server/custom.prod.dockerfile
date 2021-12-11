FROM node:12.18.3-alpine3.12
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3001 9200 9300 27017 5601
CMD npm start
