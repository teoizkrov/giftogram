To run, simply:

1. npm i
2. npm run start

If you have a running sql daemon in the background, point it to a db of your own choice and the tables will automatically created. 
here's an example .env file:

```
PORT=3000
HOST=localhost
USER=admin
PASSWORD=1234
DB=messagedb
```

