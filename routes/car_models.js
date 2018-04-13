var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Car_models = require('../models/Car_models.js');

/* GET models listing. */
router.get('/', function(req, res, next) {
    Car_models.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
      });
  });


module.exports = router;