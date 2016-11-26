
var Yelp = require('yelpv3');
var inquirer=require('inquirer');

var yelp = new Yelp({
  app_id: 'GptJ0SzOXKHkk5eSM_RLfw',
  app_secret: 'pMfKBY5LBDb9anIOzO8jPh7KflLJkPKOorZhVunOW3zfXdyuU54pRayj7XqDmhD4',
});
 

inquirer.prompt([{
	name: 'food',
	type: 'input',
	message: 'which food you like?'
},{
	name: 'zip',
	type: 'input',
	message: 'what is your zip code or city?'

}]).then(function(answer){
	// console.log(answer);


	yelp.search({term: answer.food, location: answer.zip, price:'1,2,3',limit: 10})
	.then(function (data) {
	// console.log(data);
	json = JSON.parse(data);
	// console.log(json);
	for (var i = 0; i< json.businesses.length ; i++) {
		if(json.businesses[i].location.address2===null){
			json.businesses[i].location.address2=''}
		console.log('Name =',json.businesses[i].name);
		console.log('address =',json.businesses[i].location.address1+' '+json.businesses[i].location.address2+', '+json.businesses[i].location.city+', '+json.businesses[i].location.state+', '+json.businesses[i].location.zip_code);
		console.log('Phone =',json.businesses[i].phone);
		console.log('Rating =',json.businesses[i].rating);
		console.log('Price =',json.businesses[i].price);
		console.log('---------------------------');
		
	}

	
	})

	.catch(function (err) {
	    console.error(err);
	});



});



// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search-phone.md 
// yelp.phoneSearch({phone: '+14159083801'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});
 
// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/transactions-search.md 
// yelp.transactionSearch('delivery', {location: 'Boston'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});
 
// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id.md 
// yelp.business('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});
 
// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-id-reviews.md 
// yelp.reviews('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});
 
// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md 
// yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00}, callback)
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});
 
// // callbacks 
// yelp.search({term: 'food', location: '90210', limit: 10}, function(err, data) {
//     if (err) {
//         return console.log(error);
//     }
//     console.log(data);
// });