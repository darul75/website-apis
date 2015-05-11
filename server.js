'use strict';

require('node-jsx').install();

var express = require('express');
var favicon = require('serve-favicon');
var React = require('react');
var APP = require('./app');

var app = express();
app.use(favicon(__dirname + '/public/images/favicon.ico'));
var port = process.env.PORT || 3000;
var mentions = __dirname + '/public/mentions.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/mentions', function(req, res){
  res.sendFile(mentions);
});

app.get('/', function(req, res) {
  var markup = React.renderToString(APP());
  res.send(markup);
});

app.listen(port, function() {
  console.log("Go to port " + port);
});

