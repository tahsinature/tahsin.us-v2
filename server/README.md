<a href="https://travis-ci.org/tahsinature/future-proof-nodejs">
  <img src="https://travis-ci.org/tahsinature/future-proof-nodejs.svg?branch=master" alt="Build Status" />
</a>
<a href="https://david-dm.org/tahsinature/future-proof-nodejs">
  <img src="https://david-dm.org/tahsinature/future-proof-nodejs/status.svg" alt="dependencies Status" />
</a>
<a href="https://david-dm.org/tahsinature/future-proof-nodejs?type=dev">
  <img src="https://david-dm.org/tahsinature/future-proof-nodejs/dev-status.svg" alt="devDependencies Status" />
</a>
<a href="https://snyk.io//test/github/tahsinature/future-proof-nodejs?targetFile=package.json">
  <img src="https://snyk.io//test/github/tahsinature/future-proof-nodejs/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io//test/github/tahsinature/future-proof-nodejs?targetFile=package.json" style="max-width:100%;">
</a>
<a href="#">
  <img src="https://github.com/tahsinature/future-proof-nodejs/workflows/Publish%20latest%20image/badge.svg" alt="Publish latest image" />
</a>

# Express TypeScript Boilerplate

This repo can be used as a starting point for backend development with Nodejs. It comes bundled with Docker and is CI/CD optimized. The development environment uses `docker-compose` to start dependent services like mongo.

A few things to note in the project:

- **[Github Actions Workflows](https://github.com/tahsinature/future-proof-nodejs/tree/master/.github/workflows)** - Pre-configured Github Actions to run automated builds and publish image to Github Packages
- **[Dockerfile](https://github.com/tahsinature/future-proof-nodejs/blob/master/Dockerfile)** - Dockerfile to generate docker builds.
- **[docker-compose](https://github.com/tahsinature/future-proof-nodejs/blob/master/docker-compose.yml)** - Docker compose script to start service in production mode.
- **[Containerized Mongo for development](#development)** - Starts a local mongo container with data persistence across runs.
- **[Mongo Connection Helper](https://github.com/tahsinature/future-proof-nodejs/blob/master/src/mongo-connection.ts)** - A helper class to connect to MongoDB reliably.
- **[Joi](https://github.com/sideway/joi)** - For declarative payload validation
- **[Middleware for easier async/await](https://github.com/tahsinature/future-proof-nodejs/blob/master/src/middleware/request-middleware.ts)** - Catches errors from routes and throws them to express error handler to prevent app crash due to uncaught errors.
- **[OpenAPI 3.0 Spec](https://github.com/tahsinature/future-proof-nodejs/blob/master/openapi.json)** - A starter template to get started with API documentation using OpenAPI 3.0. This API spec is also available when running the development server at `http://localhost:3001/dev/api-docs`
- **[.env file for configuration](#environment)** - Change server config like app port, mongo url etc
- **[Winston Logger](#logging)** - Uses winston as the logger for the application.
- **[Prettier](https://prettier.io/)** - Prettier is configured for linting.
- **[Jest](https://github.com/facebook/jest)** - Using Jest for running test cases

## Installation

#### 1. Clone this repo

```
$ git clone git@github.com:tahsinature/future-proof-nodejs.git your-app-name
$ cd your-app-name
```

#### 2. Install dependencies

```
$ npm i
```

#### 3. Update repository name in `.github/workflows/latest.yml`

```
      - name: Publish image to Github Packages
        uses: docker/build-push-action@v1
        with:
          username: $GITHUB_ACTOR
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: YOUR_GITHUB_USER/YOUR_REPO_NAME/YOUR_PACKAGE_NAME
          tags: latest
```

## Development

### Start dev server

Starting the dev server also starts MongoDB as a service in a docker container using the compose script at `docker-compose.dev.yml`.

```
$ npm run dev
```

Running the above commands results in

- 🌏 **API Server** running at `http://localhost:3001`
- ⚙️ **Swagger UI** at `http://localhost:3001/dev/api-docs`
- 🛢️ **MongoDB** running at `mongodb://localhost:27017`

## Packaging and Deployment

#### 1. Build and run without Docker

```
$ npm run build && npm start
```

#### 2. Run with docker

```
$ docker build -t api-server .
$ docker run -t -i -p 3001:3001 api-server
```

#### 3. Run with docker-compose

```
$ docker-compose up
```

---

## Environment

To edit environment variables, create a file with name `.env` and copy the contents from `.env.default` to start with.

| Var Name  | Type   | Default                           | Description                            |
| --------- | ------ | --------------------------------- | -------------------------------------- |
| NODE_ENV  | string | `development`                     | API runtime environment. eg: `staging` |
| PORT      | number | `3001`                            | Port to run the API server on          |
| MONGO_URL | string | `mongodb://localhost:27017/books` | URL for MongoDB                        |

## Logging

The application uses [winston](https://github.com/winstonjs/winston) as the default logger. The configuration file is at `src/logger.ts`.

- All logs are saved in `./logs` directory and at `/logs` in the docker container.
- The `docker-compose` file has a volume attached to container to expose host directory to the container for writing logs.
- Console messages are prettified
- Each line in error log file is a stringified JSON.

### Directory Structure

```
+-- scripts
|   +-- dev.sh
+-- src
|   +-- controllers
|   |   +-- book
|   |   |   +-- add.ts
|   |   |   +-- all.ts
|   |   |   +-- index.ts
|   |   |   +-- search.ts
|   +-- errors
|   |   +-- index.ts
|   +-- middleware
|   |   +-- request-middleware.ts
|   +-- models
|   |   +-- book.ts
|   +-- app.ts
|   +-- mongo-connection.ts
|   +-- router.ts
|   +-- server.ts
+-- .env
+-- .env.default
+-- .prettierrc.json
+-- .gitignore
+-- .travis.yml
+-- docker-compose.dev.yml
+-- docker-compose.yml
+-- Dockerfile
+-- jest.config.js
+-- nodemon.json
+-- openapi.json
+-- package-lock.json
+-- package.json
+-- README.md
+-- tsconfig.json
```
