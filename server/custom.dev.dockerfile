FROM node:12.18.3-alpine3.12
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . .
EXPOSE 3001 9200 9300 27017 5601
CMD npm run dev
