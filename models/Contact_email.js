'use strict';
const nodemailer = require('nodemailer');

module.exports = function(name,email,text){
    var nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: 'corvo.cars@gmail.com',
        pass: 'corvocars1234'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    let HelperOptions = {
      from: '"Corvo Cars" <corvo.cars@gmail.com>',
      to: 'corvo.cars@gmail.com',
      subject: 'Solicitud de contacto de usuario',
      text: "From: "+name+"\nMessage: "+text+".\nSend from: "+email
    };

    let HelperOptions2 = {
        from: '"Corvo Cars" <corvo.cars@gmail.com>',
        to: email,
        subject: 'Confirmation Message',
        text: "This mail is to confirm that we already received your message and will contact you as soon as possible."
      };
    
    
    
      transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("The message was sent!");
      });

      transporter.sendMail(HelperOptions2, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("The message was sent!");
      });
}


