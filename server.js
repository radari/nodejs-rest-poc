// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Config express
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

//wellcome file
app.get('/', function(req, res) {
	res.redirect('./index.html');
});

//Task APIs
app.use('/api/tasks', require('./app/taskApi'));

var server = app.listen(8080, function(){
	console.log('server running at http://localhost:3000');
});