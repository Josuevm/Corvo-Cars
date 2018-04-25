var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rims_paths =  require('../models/Rims_paths.js');


router.get('/',function (req,res,next){
    Rims_paths.find(function (err, rimsPaths) {
        if (err) return next(err);
        res.json(rimsPaths);
    });
});

module.exports = router;