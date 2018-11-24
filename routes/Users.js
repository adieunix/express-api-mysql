const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.getAllUsers(function(err,rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
