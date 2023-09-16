## Instructions to run the app

### Run inside docker

- Make sure you've docker installed
- Execute `docker-compose up`

### Run outside docker

- Make sure dependecies like (db, redis) are running by env credentials. Or you can simply run those dependencies inside docker by executing `make dependency`
- Execute `make prepare`
- Execute `make syncdb`
- Execute `make run-watch`

> Or in one command you can simply do this:
>
> ```bash
> make dependency prepare syncdb run-watch
> ```


### GraphQL
- Just modify: [schema.graphql](pkg%2Fgraph%2Fschema.graphql)
- Then goto [schema.resolvers.go](pkg%2Fgraph%2Fschema.resolvers.go) & link appropriate method


### GVM
Go version: `go1.17.2`

Install gvm
```
gvm install go1.17.2
gvm use go1.17.2
```
