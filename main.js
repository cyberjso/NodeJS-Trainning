var express = require('express');
var app = express();

var fs = require('fs'),
    fabric = require('fabric').fabric;

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

//Heroku
var port = process.env.PORT || 8001;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
})

