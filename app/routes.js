var Todo = require('./models/todo');

module.exports = function(app) {

	// api ---------------------------------------------------------------------

	app.get('/api/task', function(req, res) {

		console.log('accediendo a todos')
		
		Todo.find(function(err, todos) {

			if (err)
				res.send(err)

			res.json(todos);
		});
	});

	app.post('/api/task', function(req, res) {

		console.log('creando todo')
		
		Todo.create({
			 name : req.body.name,
			 description : req.body.description,
			 date : req.body.date,
			 priority: req.body.priority
		}, function(err, todo) {
			if (err)
				res.send(err);

			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});
		
	app.get('/api/task/:todo_id', function(req, res) {
			
			Juego.find({"player.name": req.params.player_name }, {"Laberinto": 0},function(err, bear) {
			if (err)
				res.send(JSON.parse(err));
			res.json(bear);
			});
		
	});


	app.delete('/api/task/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

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