var express = require('express');
var jade = require("jade");
var port = process.argv[2];
var file = process.argv[3];
var app = express();
app.set('views', file);
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()}); 
});
app.listen(port);