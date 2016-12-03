// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var eventful = require('eventful-node');

// add the UserInput model and sync it.
// Syncing the model will create a matching table in our MySQL db. 
var UserInput = require("./models")["UserInput"]
UserInput.sync(); // creates a UserInput table

//passport start--------------------------------

var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

//passport end--------------------------------



// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3306; // Sets an initial port. We'll use this later in our listener

//passport start--------------------------------

var passport = require('passport');
var flash    = require('connect-flash');

require('./controller/passport')(passport); // pass passport for configuration

//passport end--------------------------------




// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//passport start--------------------------------

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//passport part end------------------------------------------

// read css
app.use(express.static(__dirname + '/views/assets'));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================


require('./views/html-routes.js')(app, passport);
require('./views/api-routes.js')(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});