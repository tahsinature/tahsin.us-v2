## temp command (run like from your host machine from docker)

```bash
docker build -t me-v2 .
docker run -v ~/Workstation/personal/me/src:/app/src -v ~/Workstation/personal/me/public:/app/public --rm -it -p 3000:3000 me-v2 sh
npm start
```

<!-- ### before work

```bash
docker-compose up
```

<br />
<br />
<br />

### after work

```bash
docker-compose down
``` -->
