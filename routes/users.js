var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  User.create(req.body, function(err,post){
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;
