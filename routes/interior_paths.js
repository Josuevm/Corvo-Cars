var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Interior_paths = require('../models/Interior_paths.js');


    router.get('/', function (req, res, next) {
  
        Interior_paths.find(function (err, products) {
            if (err) return next(err);
            res.json(products);
        });
    });

/* GET models listing. */


module.exports = router;