const sequelize = require('../sequelize');

module.exports = async function(req,res,next) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
};