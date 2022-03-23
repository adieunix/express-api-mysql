const db = require('../dbconnection');
const sha1 = require('sha1');
const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const sequelizeConfigUser = db.sequelize.define('users', {
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

    /* Get All Users */
    getAllUsersSequelize: function(start,limit,callback) {
        sequelizeConfigUser.findAll({
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

    /* Get User by ID */
    getUserByIdSequelize: function(id,callback) {
        sequelizeConfigUser.findOne({
            where: { id: id }
        }).then(function(item){
            callback(false, JSON.parse(JSON.stringify(item)))
        }).catch(function(err) {
            // console.log(err.parent.sql);
            callback(err.parent, null);
        });
    },
    
    getUserById: function(id, callback) {
        return db.query.query("SELECT * FROM users WHERE id = ?", [id], callback);
    },

    /* Add User */
    addUserSequelize: function(user,callback) {
        sequelizeConfigUser.create(user).then(function(item){
            callback(false, JSON.parse(JSON.stringify(item)))
        }).catch(function(err) {
            // console.log(err.parent.sql);
            callback(err.parent, null);
        });
    },
    
    addUser: function(user,callback) {
        return db.query.query("INSERT INTO users (name,email,`password`) VALUES (?,?,?)", [user.name,user.email,sha1(user.password)], callback);
    },

    /* Update User by ID */
    updateUserByIdSequelize: function(user,callback) {
        sequelizeConfigUser.update(user, {
            where: {
                id: user.id
            }
        }).then(function(item){
            callback(false, JSON.parse(JSON.stringify(item)))
        }).catch(function(err) {
            // console.log(err.parent.sql);
            callback(err.parent, null);
        });
    },
    
    updateUser: function(user,callback) {
        return db.query.query("UPDATE users SET name=?,email=?,password=? WHERE id=?", [user.name,user.email,sha1(user.password),user.id], callback);
    },

    /* delete User by ID */
    deleteUserByIdSequelize: function(id,callback) {
        sequelizeConfigUser.destroy({
            where: {
                id: id
            }
        }).then(function(item){
            callback(false, JSON.parse(JSON.stringify(item)))
        }).catch(function(err) {
            // console.log(err.parent.sql);
            callback(err.parent, null);
        });
    },
    
    deleteUser: function(id,callback) {
        return db.query.query("DELETE FROM users WHERE id=?",[id],callback);
    },

};

module.exports = User;
