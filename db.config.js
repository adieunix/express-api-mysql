// import sequelize
const { Sequelize } = require("sequelize");

// create connection
const db = new Sequelize('example_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

// export connection
module.exports = db;