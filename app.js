'use strict';

var http = require('http');
var express = require('express');
var server;
var app = express();

server = http.createServer();

// Routing
app.get('/api/hello', function (request, response) {
  response.send({ message: "hello" });
});
app.get('/api/bye', function (request, response) {
  response.send({ message: "bye" });
});
server.on('request', app);

server.on('listening', function () {
  console.log('ready to accept requests');
});
server.listen(3080);
