var express = require('express');
var bodyparser = require('body-parser');
var port = process.argv[2];
var file = process.argv[3];
var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(port);