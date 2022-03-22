const db = require('../dbconnection'); //reference of dbconnection.js
const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;
const md5 = require('md5');

const getUsers = db.sequelize.define('users', {
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

    getAllUsers: function(start,limit,callback) {
        return db.query.query("SELECT * FROM api_users LIMIT ?,?", [start,limit], callback);
    },

    getAllUsersSequelize: async function(start,limit) {
        // const getAllUsers = await getUsers.findAll({ offset: start, limit: limit });
        // return JSON.parse(JSON.stringify(getAllUsers));
        getUsers.findAll({ offset: start, limit: limit }).then(function(item){
            // console.log('RES: ', JSON.parse(JSON.stringify(item)));
            return JSON.parse(JSON.stringify(getAllUsers));
        }).catch(function (err) {
            // handle error;
            // console.log('ERR: ', err);
            return null
        });
    },
    
    getUserById: function(id, callback) {
        return db.query.query("SELECT * FROM api_users WHERE id = ?", [id], callback);
    },
    
    addUser: function(user,callback) {
        return db.query.query("INSERT INTO api_users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,md5(user.password)], callback);
    },
    
    updateUser: function(user,callback) {
        return db.query.query("UPDATE api_users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,md5(user.password),user.id], callback);
    },
    
    deleteUser: function(id,callback) {
        return db.query.query("DELETE FROM api_users WHERE id=?",[id],callback);
    },

};

module.exports = User;
