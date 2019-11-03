var db;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 
'mongodb://localhost:27017/MemoDB';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, mongodb) {
    assert.equal(null, err);
    console.log("Connected correctly to 
server");
    db = mongodb;
    if (err) throw err;
    var obj = { name: "Company Inc", address: "Highway 37" };
// ----------------------------------------------------------------------
// TEST INSERT
// ----------------------------------------------------------------------
    db.collection("testCollection").insertOne(obj , function(err, res) {
      if (err) throw err;
      db.close();
    });
});

db.createCollection('testCollection');


var collection = function( name ) {
    return db.collection( name );
}

module.exports = collection;
