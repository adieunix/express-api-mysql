### NodeJS / Express / MySQL
A simple way to build express restful api and mysql server.
1. Run `npm install` first to initiate node modules
2. Running server: `node server`
3. Browse url on port **3000**

### URI Routing

`localhost:3000/controller/method?key=<api_key>&params=<params>`

**example :**

`http://localhost:3000/users/get_all_users?key=keyfordevelopment&start=0&limit=10`

### Constant.js
Simplify your codes using constant helpers and redefine into each methods.

### Dbconnection.js
Configure your connection to MySQL server instance. Dumping sql file (**adiepw_api.sql**) to database name **adiepw_api** for testing purpose
