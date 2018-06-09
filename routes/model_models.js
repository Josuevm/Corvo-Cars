var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Model_models = require('../models/model_Models.js');


router.get('/', function (req, res, next) {
    Model_models.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

module.exports = router;