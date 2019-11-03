var db;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 
'mongodb://localhost:27017';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongodb) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db = mongodb.db("MemoDB");
    if (err) throw err;
    var obj = { name: "Ichiro", username: "ichiro", password: "fuga" };
    // ----------------------------------------------------------------------
    // TEST INSERT
    // ----------------------------------------------------------------------
    db.collection("test1").insertOne(obj , function(err, res) {
      if (err) throw err;
      mongodb.close();
    });
});

var collection = function( name ) {
    return db.collection( name );
}

module.exports = collection;
