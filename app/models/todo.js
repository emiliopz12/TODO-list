var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	 name : String
	// description : String,
	// date : String,
	// priority: String
});
