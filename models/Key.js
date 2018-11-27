const db = require('../dbconnection'); //reference of dbconnection.js

const Key = {
    check: function(key, callback) {        
        return db.query("SELECT * FROM api_keys WHERE `key` = ?", [key], callback);
    }
};

module.exports = Key;