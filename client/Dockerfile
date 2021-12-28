FROM node:12.18.4-alpine3.12 AS build
WORKDIR /app
COPY package*.json ./
RUN ["npm", "i"]
COPY . .
COPY .env_rename_me .env
RUN ["npm", "run", "build"]
CMD [ "npx", "http-server", "-p", "80", "--proxy", "http://localhost\?", "build" ]

# FROM nginx:1.20.1-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# ENTRYPOINT [ "nginx-debug", "-g", "daemon off;" ]

FROM node:12.18.4-alpine3.12
WORKDIR /app
COPY --from=build /app/build /app
EXPOSE 80
CMD [ "npx", "http-server", "-p", "80", "--proxy", "http://localhost\?", "/app" ]