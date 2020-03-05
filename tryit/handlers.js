var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// CHANGE THIS COLLECTION NAME TO SOMETHING UNIQUE TO YOU
var collectionName = '';

var dbuser = 'student';
var dbpassword = 'webdev';
var dburl = 'ds153637.mlab.com:53637'
var dbname = 'tutorial';
var uriString = 'mongodb://' + dbuser + ':' + dbpassword + '@' + dburl + '/' + dbname

var c;
var db;
MongoClient.connect(uriString, function (err, database) {
    if (err) {
        console.log(err);
    }
    console.log("Connected correctly to mongo");
    db = database
    c = db.collection(collectionName);
});

var handlers = {
    write: function(req, res) {
    },

    read: function(req, res) {

    },

    readOne: function(req, res) {

    },

    update: function(req, res) {

    },

    delete: function(req, res) {

    }
}

module.exports = handlers
