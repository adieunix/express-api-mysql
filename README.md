### NodeJS / Express / MySQL
A simple way to build express restful api and mysql server.
1. Run `npm install` first to initiate node modules
2. Running server: `node server`
3. Browse url on port **3000**

### URI Routing
Query string of URL to request and handling each params

`localhost:3000/controller/method?key=<api_key>&params=<params>`

**example :**

`http://localhost:3000/users/get_all_users?key=keyfordevelopment&start=0&limit=10`

### Route / Method
Define your methods depends on controller name

**example**

`User.js` : **get_all_users** / **get_user** / **update_user**

`Task.js` : **get_all_tasks** / **get_task_by_id**

### Models
Same as route, you have to create each of models depends on controller name

### App.js
Set up your controller name into **App.js**

### Constant.js
Simplify your codes using constant helpers and redefine into each methods. 

### Dbconnection.js
Configure your connection to MySQL server instance. Dumping sql file (**adiepw_api.sql**) for testing purposes

___

More feedback? Feel free to contact me at **[me@adie.pw](mailto:me@adie.pw)**