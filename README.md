# devmtn-node-lesson2-express
Node.js Lesson 2: Express.js

Install
===

```bash
git clone https://github.com/coolaj86/devmtn-node-lesson2-express.git
pushd ./devmtn-node-lesson2-express

npm install
```

Usage
==========

```
npm start
```

When the server starts you will be able to visit it at http://localhost:3080.

How we did it
=============

```bash
# go home
pushd ~/

# create our project directory
mkdir ./devmtn-node-lesson2-express

# go into our project directory
pushd ./devmtn-node-lesson2-express

# creates an empty file app.js
touch app.js

# asks us questions about our project
# and creates package.json
npm init

# creates node_modules
# installs express as node_modules/express 
# updates package.json to include dependencies.express
npm install --save 'express@4.x'

# vim package.json
# add the line `, "start": "node ./app.js"`
# which enables `npm start`
```

Our Application
----------

```javascript
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
```

Our Application Server
----------

```javascript
'use strict';

var http = require('http');
var app = require('./app');
var server = http.createServer();
var port = process.argv[2] || 3080;

server.on('request', app);

server.on('listening', function () {
  console.log(
    'ready to accept requests at '
  + server.address().address + ':' + server.address().port
  );
});

server.listen(port);
```

Extra Credit
============

* HTTPS https://coolaj86.com/articles/how-to-create-a-csr-for-https-tls-ssl-rsa-pems/
* cURL https://twitter.com/coolaj86/status/593651511927836672
* netcat https://coolaj86.com/articles/intro-to-networking-with-netcat-and-nodejs.html
* more express https://coolaj86.com/articles/intro-to-http-with-netcat-node-connect.html
