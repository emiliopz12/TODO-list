var Todo = require('./models/todo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/task', function(req, res) {

		console.log('accediendo a todos')
		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/task', function(req, res) {

		console.log('creando todo')
		
		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			 name : req.body.name
			// description : req.body.description,
			// date : req.body.date,
			// priority: req.body.priority
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});
	
	

		
	// delete a todo
	app.get('/api/task/:todo_id', function(req, res) {
			
			Juego.find({"player.name": req.params.player_name }, {"Laberinto": 0},function(err, bear) {
			if (err)
				res.send(JSON.parse(err));
			res.json(bear);
			});
		
	});

	// delete a todo
	app.delete('/api/task/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};