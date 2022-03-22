const express = require('express');
const router = express.Router();
const User = require('../models/User');
const constant = require('../helpers/Constants');

/* Sequelize GET all users params {key,start,limit} */
router.get(constant.API_GET_ALL_USERS_SEQUELIZE, async function(req, res) {
    res.json({
        status_code: 1,
        message: 'success',
        data: await User.getAllUsersSequelize(Number(req.query.start),Number(req.query.limit))
    });
});

/* GET all users params {key,start,limit} */
router.get(constant.API_GET_ALL_USERS, function(req, res, next) {
    User.getAllUsers(
        Number(req.query.start),
        Number(req.query.limit),
        function(errRes,rowsRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 0,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* GET user by ID params {key,id} */
router.get(constant.API_GET_USER_BY_ID, function(req, res, next) {
    User.getUserById(
        Number(req.query.id),
        function(errRes,rowsRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 0,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* POST add user params {key,name,email,password} */
router.post(constant.API_ADD_USER, function(req,res,next) {
    User.addUser(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        function(errRes,rowsRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 0,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* UPDATE user params {key,id,name,email,password} */
router.post(constant.API_UPDATE_USER,function(req,res,next) {
    User.updateUser(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            id: req.body.id
        },
        function(errRes,rowsRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 0,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* DELETE user params {key,id} */
router.post(constant.API_DELETE_USER,function(req,res,next) {
    User.deleteUser(req.body.id, function(errRes,rowsRes) {
        if(errRes) {
            res.json({
                status_code: 0,
                message: errRes.sqlMessage,
                data: null
            });
        } else {
            res.json({
                status_code: 0,
                message: 'success',
                data: rowsRes
            });
        }
    });
});


module.exports = router;
