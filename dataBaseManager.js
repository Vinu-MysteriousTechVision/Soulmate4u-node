var MongoClient = require('mongodb').MongoClient;

function createDataBase() {
  var url = "mongodb://localhost:27017/mydb";
  console.log("Database created_1!");

  MongoClient.connect(url, function(err, db) {
    console.log('Error: ' + err);
    if (err) {
      console.log("Database creation error!");
      //throw err;
      return;
    }
    console.log("Database created!");
    db.close();
  });
}

function createCollection() {
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
}

function insertDataIntoCollection() {
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

function findData() {
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    // dbo.collection("customers").findOne({}, function(err, result) {
    //   if (err) throw err;
    //   console.log(result.name);
    //   db.close();
    // });
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

  });
}


module.exports = DataBaseManager = {
  createDataBase,
  createCollection,
  insertDataIntoCollection,
  findData
}
