frist of all if you don't have react installed yet check the [react installation](https://react.dev/learn/installation) link.


to run the app first you need to install all dependencies using the followind command
```
npm i
```
then the following command to run the project
```
npm start
```


in the project we need a database and for that i'm just using a fake one at data/db.jsom file,
so to make the program using that database and fetch the data inside it we need a server,
i used the ``JSON server`` to watch it.


to do that need to run the following command
```
npx json-server --watch data/db.json --port 8000
```
changed the port to ``8000`` because the default port of ``JSON server`` is ``3000`` which is the same port of ``react server`` ``3000``.
