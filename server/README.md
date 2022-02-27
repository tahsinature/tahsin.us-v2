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
