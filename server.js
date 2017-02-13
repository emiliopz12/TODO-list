// set up ======================================================================
var express  = require('express');
var app      = express(); 								
var mongoose = require('mongoose'); 					
var port  	 = process.env.PORT || 8080; 				
var database = require('./config/database'); 			

var morgan = require('morgan'); 		
var bodyParser = require('body-parser'); 	
var methodOverride = require('method-override'); 

// configuration ===============================================================
mongoose.connect(database.url); 	
app.use(function(req, res, next) {
	console.log('Something is happening.');
	
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Length, Accept");
	
	next();
});
app.use(express.static(__dirname + '/public')); 				
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
