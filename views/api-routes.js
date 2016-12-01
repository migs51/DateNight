// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var UserInput 	= require("../models")["UserInput"]; // Pulls out the Character Model



// Routes
// =============================================================
module.exports = function(app){

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var userInputData = req.body;

		// Create a routeName
		var location = userInputData.location.replace(/\s+/g, '').toLowerCase();

		// Then add the character to the database using sequelize
		UserInput.create({
			location: location,
			event: userInputData.event,
		});

	})
}
