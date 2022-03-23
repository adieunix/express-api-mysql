const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const forms = multer();
const basicAuth = require('express-basic-auth');
const cors = require('cors');
const app = express();

/* view engine setup */
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(basicAuth({
    users: { 'user': '123456' },
    challenge: true,
}));

/* Routes */
const index = require('./routes/Index');
app.use('/', index);

const users = require('./routes/Users');
app.use('/users', users);


/* Export to server.js */
module.exports = app;
