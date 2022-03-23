const db = require('../dbconnection');
const md5 = require('md5');
const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const getAllUsers = db.sequelize.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

const User = {

    getAllUsersSequelize: function(start,limit,callback) {
        getAllUsers.findAll({
            offset: start,
            limit: limit
        }).then(function(item){
            callback(false, JSON.parse(JSON.stringify(item)))
        }).catch(function(err) {
            // console.log(err.parent.sql);
            callback(err.parent, null);
        });
    },

    getAllUsers: function(start,limit,callback) {
        return db.query.query("SELECT * FROM users LIMIT ?,?", [start,limit], callback);
    },
    
    getUserById: function(id, callback) {
        return db.query.query("SELECT * FROM users WHERE id = ?", [id], callback);
    },
    
    addUser: function(user,callback) {
        return db.query.query("INSERT INTO users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,md5(user.password)], callback);
    },
    
    updateUser: function(user,callback) {
        return db.query.query("UPDATE users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,md5(user.password),user.id], callback);
    },
    
    deleteUser: function(id,callback) {
        return db.query.query("DELETE FROM users WHERE id=?",[id],callback);
    },

};

module.exports = User;
