const db = require('../dbconnection'); //reference of dbconnection.js

const User = {

    getAllUsers: function(callback) {
        return db.query("SELECT * FROM api_users",callback);
    }

};

module.exports = User;
