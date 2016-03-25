var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        user: "",
        pass: ""
    }
});



app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

app.get('/send', function (req, res) {

    var mailOptions = {
        name: req.query.name,
        to: req.query.to,
        text: req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});


app.listen(8080, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }
});