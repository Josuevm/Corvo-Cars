var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Car_models = require('../models/Car_models.js');
/*
var Rims_models =  require('../models/Rims_models.js');
var Motor_models = require('../models/Motor_models.js');
var Interior_models = require('../models/Interior_models.js');
*/

/* GET models listing. */
router.get('/', function (req, res, next) {
    Car_models.find(function (err, products) {
        if (err) return next(err);
        console.log(products);
        res.json(products); 
    });
});

router.get('/features/:model', function (req, res, next) {
    var modelName = decodeURIComponent(req.params.model);
    Car_models.findOne({name: modelName},function (err, response) {
        if (err) return next(err);
        console.log(response.features);
        res.send(response.features);``
    });
});
/*
router.get('/rims',function (req,res,next)
{
    Rims_models.find(function (err, rimsPaths) {
        if (err) return next(err);
        res.json(rimsPaths);
    });
});
*/
/*
router.get('/interior',function (req,res,next)
{
    Interior_models.find(function (err, interiorPaths) {
        if (err) return next(err);
        res.json(interiorPaths);
    });
});
*/
/*
router.get('/motor',function (req,res,next)
{
    Motor_models.find(function (err, motorPaths) {
        if (err) return next(err);
        res.json(motorPaths);
    });
});
 */
module.exports = router;