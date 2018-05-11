const DataBaseManager = require('./dataBaseManager')

const express = require('express')
const app = express()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', (req, res) => {
  initDataBase();
  res.send('Hello World Testing!')
})

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book' + JSON.stringify(req.query.userID) +' : '+ req.query.testData)
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(port, ip);

function initDataBase() {
  DataBaseManager.createDataBase();
  DataBaseManager.createCollection();
  DataBaseManager.insertDataIntoCollection();
  DataBaseManager.findData();
}

module.exports = app ;
