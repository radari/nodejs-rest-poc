// Dependencies
var express = require('express');
var router = express.Router();

var db = {}, sequence = 0;

router.get('/', function(req, res) {
	res.json(db);
});

router.get('/:id', function(req, res) {
	if(db[req.params.id]) {
		res.json(db[req.params.id]);
	}
	else {
		res.status(404).send('Not found!');
	}
});

router.post('/', function(req, res) {
	var newTask = {
		id: ++sequence,
		done: req.body.done || false,
		description: req.body.description
	};
	
	db[newTask.id] = newTask;
	
	res.json(newTask);
});

router.put('/:id', function(req, res) {
	var task = db[req.params.id];
	
	if(task) {
		task.done = req.body.done != null ? req.body.done : task.done;
		task.description = req.body.description || task.description;
		res.json(task);
	}
	else {
		res.status(404).send('Not found!');
	}
});

module.exports = router;