to run the app
```
npm start
```
first need a database and i'm using a fake one localy,
so need a JSON server to watch it and to do that need to the following command
```
npx json-server --watch data/db.json --port 8000
```
prot ``8000`` because the JSON server has the same port of react server ``3000``.
