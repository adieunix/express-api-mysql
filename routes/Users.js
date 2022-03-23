const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const User = require('../models/User');
const constant = require('../helpers/Constants');

/* Sequelize GET all users params {start,limit} */
router.get(constant.API_GET_ALL_USERS_SEQUELIZE, async function(req, res) {
    User.getAllUsersSequelize(
        Number(req.query.start),
        Number(req.query.limit),
        function(errRes,rowRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: rowRes
                });
            }
        }
    )
});

/* Sequelize GET user by ID params {id} */
router.get(constant.API_GET_USER_BY_ID_SEQUELIZE, async function(req, res) {
    User.getUserByIdSequelize(
        Number(req.query.id),
        function(errRes,rowRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: rowRes
                });
            }
        }
    )
});

/* Sequelize POST add user params {name,email,password} */
router.post(constant.API_ADD_USER_SEQUELIZE, function(req,res) {
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: sha1(req.body.password)
    }
    User.addUserSequelize(
        user,
        function(errRes,rowRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: rowRes
                });
            }
        }
    )
});

/* Sequelize UPDATE user params {name,email,password} */
router.post(constant.API_UPDATE_USER_SEQUELIZE, function(req,res) {
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: sha1(req.body.password)
    }
    User.updateUserByIdSequelize(
        user,
        function(errRes,rowRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: rowRes
                });
            }
        }
    )
});

/* Sequelize DELETE user params {id} */
router.post(constant.API_DELETE_USER_SEQUELIZE, function(req,res) {
    let id = req.body.id;
    User.deleteUserByIdSequelize(
        id,
        function(errRes,rowRes) {
            if(errRes) {
                res.json({
                    status_code: 0,
                    message: errRes.sqlMessage,
                    data: null
                });
            } else {
                res.json({
                    status_code: 1,
                    message: 'success',
                    data: rowRes
                });
            }
        }
    )
});

/* GET all users params {start,limit} */
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
                    status_code: 1,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* GET user by ID params {id} */
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
                    status_code: 1,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* POST add user params {name,email,password} */
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
                    status_code: 1,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* UPDATE user params {name,email,password} */
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
                    status_code: 1,
                    message: 'success',
                    data: rowsRes
                });
            }
        }
    );
});

/* DELETE user params {id} */
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
                status_code: 1,
                message: 'success',
                data: rowsRes
            });
        }
    });
});


module.exports = router;
