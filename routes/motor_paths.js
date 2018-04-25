var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Motor_paths = require('../models/Motor_paths.js');

router.get('/',function (req,res,next)
{
    Motor_paths.find(function (err, motorPaths) {
        if (err) return next(err);
        console.log(res.json(motorPaths));
    });
});
 
module.exports = router;