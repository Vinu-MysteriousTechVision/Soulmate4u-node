
const express = require('express')
const app = express()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World Testing!'))

app.listen(port, ip);

module.exports = app ;
