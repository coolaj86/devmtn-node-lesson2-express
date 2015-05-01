'use strict';

var express = require('express');
var app = express();

// CORS will become important 
app.use('/api', function (req, res, next) {
  if ('OPTIONS' === req.method) {
    res.header('Access-Control-Allow-Origin' , '*');
    res.header(
      'Access-Control-Allow-Methods'
    , 'OPTIONS, GET, POST, PATCH, PUT, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers'
    , 'Origin, X-Requested-With, Content-Type, Accept'
    );

    res.end();
    return;
  }

  next();
});

// This is the same as body
// app.use('/api', require('body-parser')());
app.use('/api', function (request, response, next) {
  if ('POST' !== request.method) {
    next();
    return;
  }

  var postBody = '';
  request.on('data', function (chunk) {
    postBody += chunk.toString('utf8');
  });
  request.on('end', function () {
    request.body = JSON.parse(postBody || '{}');
    next();
  });
});

// Routing
// 
app.get('/api/static/hello', function (request, response) {
  response.send({ message: "hello" });
});

app.get('/api/dynamic', function (request, response) { 
  response.send({ message: 'hello' });
});

app.get('/api/dynamic/:message', function (request, response) { 
  var msg = request.param('message');
  response.send({ message: msg });
});

app.use('/', function (req, res) {
  res.send(req.body || { message: 'no body and route not found' });
});
