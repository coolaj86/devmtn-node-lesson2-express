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

Extra Credit
============

* HTTPS https://coolaj86.com/articles/how-to-create-a-csr-for-https-tls-ssl-rsa-pems/
* cURL https://twitter.com/coolaj86/status/593651511927836672
* netcat https://coolaj86.com/articles/intro-to-networking-with-netcat-and-nodejs.html
* more express https://coolaj86.com/articles/intro-to-http-with-netcat-node-connect.html
