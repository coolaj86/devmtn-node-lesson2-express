'use strict';

var http = require('http');
var app = require('./app');
var server = http.createServer();

server.on('request', app);

server.on('listening', function () {
  console.log(
    'ready to accept requests at '
  + server.address().address + ':' + server.address().port
  );
});
server.listen(3080);
