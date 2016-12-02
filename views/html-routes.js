// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

// module.exports = function (app) {
// 	// HTML GET Requests
// 	// Below code handles when users "visit" a page.
// 	// In each of the below cases the user is shown an HTML page of content
// 	// ---------------------------------------------------------------------------

// 	app.get('/profile', function (req, res) {
// 		res.sendFile(path.join(__dirname + '/profile.html'));
// 	});

// 	// If no matching route is found default to home
// 	app.use(function (req, res) {
// 		res.sendFile(path.join(__dirname + '/index.html'));
// 	});
// };


// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		//res.render('index.html'); // load the index.ejs file
		res.sendFile(path.join(__dirname + '/./index.html'));
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/event', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/input', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/main', isLoggedIn, function(req, res) {
		res.render('main.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/profile', function(req, res) {
		//res.render('index.html'); // load the index.ejs file
		res.sendFile(path.join(__dirname + '/./profile.html'));
	});

	app.get('/event', function(req, res) {
		//res.render('index.html'); // load the index.ejs file
		res.sendFile(path.join(__dirname + '/./event.html'));
	});

	app.get('/input', function(req, res) {
		//res.render('index.html'); // load the index.ejs file
		res.sendFile(path.join(__dirname + '/./input.html'));
	});



};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
