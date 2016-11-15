var express = require('express');
var handlers = require('./handlers');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/doc', handlers.read);
app.get('/doc/:id', handlers.readOne);
app.post('/doc', handlers.write);
app.put('/doc/:id', handlers.update);
app.delete('/doc/:id', handlers.delete);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Application listening on ', port);
});
