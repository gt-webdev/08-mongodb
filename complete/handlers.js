var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// CHANGE THIS COLLECTION NAME TO SOMETHING UNIQUE TO YOU
var collectionName = 'jackson';

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
        var doc = req.body;
        c.insert(doc, function(err, status) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(201).send(status);
            }
        });
    },

    read: function(req, res) {
        c.find({}).toArray(function (err, docs) {
            if (err) {
                res.status(500).send();
            } else {
                res.send(docs);
            }
        });
    },

    readOne: function(req, res) {
        var id = req.params.id;
        c.findOne({ _id: ObjectID(id) }, function (err, doc) {
            if (err) {
                res.status(500).send();
            } else if (doc == null) {
                res.status(404).send();
            } else {
                res.send(doc);
            }
        });
    },

    update: function(req, res) {
        var id = req.params.id;
        var doc = req.body;
        c.update({ _id: ObjectID(id) }, { $set: doc }, function(err, status) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(status);
            }
        });
    },

    delete: function(req, res) {
        var id = req.params.id;
        var doc = req.body;
        c.deleteOne({ _id: ObjectID(id) }, function(err, status) {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(status);
            }
        });
    }
}

module.exports = handlers
