var express = require('express');
var router = express.Router();
var Contact_email = require('../models/Contact_email.js')

router.post('/', function (req,res,next){
    Contact_email(req.body.name,req.body.email,req.body.body);
    res.json("['message':'Email send']")
})

module.exports = router;