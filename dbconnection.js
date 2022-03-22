const mysql = require('mysql');
const { Sequelize } = require("sequelize");

const query = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'example_api',
    port:3306
});

const sequelize = new Sequelize('example_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {
    query: query,
    sequelize: sequelize,
};
