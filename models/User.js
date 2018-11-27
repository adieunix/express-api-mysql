const db = require('../dbconnection'); //reference of dbconnection.js
const md5 = require('md5');

const User = {

    getAllUsers: function(start,limit,callback) {
        return db.query("SELECT * FROM api_users LIMIT ?,?", [start,limit], callback);
    },
    
    getUserById: function(id, callback) {
        return db.query("SELECT * FROM api_users WHERE id = ?", [id], callback);
    },
    
    addUser: function(user,callback) {
        return db.query("INSERT INTO api_users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,md5(user.password)], callback);
    },
    
    updateUser: function(user,callback) {
        return db.query("UPDATE api_users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,md5(user.password),user.id], callback);
    },
    
    deleteUser: function(id,callback) {
        return db.query("DELETE FROM api_users WHERE id=?",[id],callback);
    },

};

module.exports = User;
