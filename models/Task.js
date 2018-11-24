const db = require('../dbconnection'); //reference of dbconnection.js

const Task = {

    getAllTasks: function(callback) {
        return db.query("SELECT * FROM task",callback);
    },

    getTaskById: function(id,callback) {
        return db.query("SELECT * FROM task WHERE id=?",[id],callback);
    },

    addTask: function(Task,callback) {
        return db.query("INSERT INTO task VALUES(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    },

    deleteTask: function(id,callback) {
        return db.query("DELETE FROM task WHERE id=?",[id],callback);
    },

    updateTask: function(id,Task,callback) {
        return db.query("UPDATE task SET title=?,status=? WHERE id=?",[Task.Title,Task.Status,id],callback);
    }

};
module.exports = Task;
