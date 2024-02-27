To run, simply:

```
1. npm i
2. npm run start
```

If you have a running sql daemon in the background, point it to a db of your own choice and the tables will be automatically created. 
here's an example of an acceptable .env file, or ENV vars to be created in order for this to work:

```
PORT=3000 # the port of the server itself
HOST=localhost # domain/hostname
USER=admin # username to connect to your db
PASSWORD=1234 # password to connect to your db
DB=messagedb # name of the db you are connecting to
```

