const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('example_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;