/*
const express = require('express')
const app = express()

var port = 8080;// process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, ip);

module.exports = app ;
*/

/*
var express = require('express'),
    fs = require('fs'),
    app = express();
 
var app = express();
 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.get('/', function(req, res) {
    res.send('Hello from NodeJS  at '+ new Date());
});
 
app.listen(8080, ip);
 
module.exports = app;
*/

const express = require('express')
const app = express()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World Testing!'))

app.listen(port, ip);

module.exports = app ;
