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

### If you wanna use it in your project

1. Fine and replace all the `github.com/tahsinature/future-proof-gin` with your project's github url
2. Take care of LICENSE and README.md
3. Rename `.env_rename_me` -> `.env`
4. Change database and other credentials according to your project

Then you are pretty much good to go
