const express = require('express')
const app = express()

var port = process.env.PORT || 8080 //process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, ip);

module.exports = app ;
