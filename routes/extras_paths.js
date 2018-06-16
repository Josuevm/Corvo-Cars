var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Extras_paths =  require('../models/Extras_paths.js');

router.get('/',function (req,res,next){
    Extras_paths.find(function (err, extras_paths) {
        if (err) return next(err);
        res.json( extras_paths);
    });
});
module.exports = router;


