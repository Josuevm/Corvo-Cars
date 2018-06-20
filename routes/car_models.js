var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Car_models = require('../models/Car_models.js');


/* GET models listing. */
router.get('/', function (req, res, next) {
    Car_models.find(function (err, products) {
        if (err) return next(err);
        res.json(products); 
    });
});

router.get('/features/:model', function (req, res, next) {
    var modelName = decodeURIComponent(req.params.model);
    Car_models.findOne({name: modelName},function (err, response) {
        if (err) return next(err);
        res.send(response.features);``
    });
});

router.get('/models/:modelName', function (req, res, next){
    var modelName = decodeURIComponent(req.params.modelName);
    Car_models.findOne({name: modelName},function (err, response) {
        if (err) return next(err);
        res.send(response);
    });
});

module.exports = router;