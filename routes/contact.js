var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next){
    res.render('contact', {title : 'Contact'});
});

// Send Email
router.post('send', function(req, res, next){
    // Create a reusable Transporter
    var transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth : {
            user: '',
            pass: ''
        }
    });
    
    // Email Setup
    var mailOptions = {
        from : '' ,
        to : '',
        subject : ''
    };
    
    // Send
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');    
        } else {
            console.log('' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;