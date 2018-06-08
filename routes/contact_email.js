var express = require('express');
var router = express.Router();
var Contact_email = require('../models/Contact_email.js')

router.post('/', function (req,res,next){
    console.log(req.body)
    Contact_email(req.body.name,req.body.email,req.body.body);
    console.log("entra a router");
    res.json("['message':'Email send']")
})

//Añadir a index o sino no sirve

module.exports = router;