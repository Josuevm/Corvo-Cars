var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/Users.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body.username);
  Users.create(req.body, function(err,post){
     
    if(err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/userList', function(req, res, next) {
    Users.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
      });
  });

module.exports = router;