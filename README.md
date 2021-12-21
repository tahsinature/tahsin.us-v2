![ci](https://github.com/tahsinature/tahsin.us/actions/workflows/ci.yml/badge.svg)

## temp command (run like from your host machine from docker)

```bash
docker build -t me-v2 .
docker run -v ~/<project-dir>/src:/app/src -v ~/<project-dir>/public:/app/public --rm -it -p 3000:3000 me-v2 sh
npm start
```
