var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next){
    res.render('contact', {title : 'Contact'});
});

// Send email
router.post('send', function(req, res, next){
    
});

module.exports = router;