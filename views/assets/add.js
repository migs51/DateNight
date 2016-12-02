// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

console.log("got it")

// when user clicks addBtn
$('#addBtn').on("click", function(){

	// make a newCharacter obj
	var newInput = 
	{
		location: $("#location").val().trim(),
		event: $("#event").val().trim()
	};

	// grab the url from the window/tab
	var currentURL = window.location.origin;

	// send an AJAX POST-request with jQuery
	$.post( currentURL + "/api/new", newInput)
		// on success, run this callback
		.done(function(data){
			// log the data we found
			console.log(data);
			// tell the user we're adding a character with an alert window
			alert("Adding newInput...")
		})

	// empty each input box by replacing the value with an empty string
	$('#location').val("");
	$('#event').val("");

	$('#h1_input').empty();
	var profileUpdated = "<h1>"+"Your profile is created"+"<h1>";
	$('#h1_input').append(profileUpdated);
	$('#findevents').hide();



	// returning false will stop the page from reloading
	// by preventing the form's default behavior.
	return false;

});	
