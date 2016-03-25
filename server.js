var express = require('express');
var nodemailer = require('nodemailer');

var app = express();



app.use(express.static(__dirname + '/public'));


app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});