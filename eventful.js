
var eventful = require('eventful-node');
var inquirer=require('inquirer');

var client = new eventful.Client('NPX5k2wQKkFQC5Bz');
 

inquirer.prompt([{
	name: 'event',
	type: 'input',
	message: 'which event you like?'
// },{
// 	name: 'zip',
// 	type: 'input',
// 	message: 'what is your zip code or city?'

	}]).then(function(answer){
	console.log(answer);
client.searchEvents({ keywords: answer.event }, function(err, data){
 
  if(err){
  
    return console.error(err);
  
  }
  
  console.log('Recieved ' + data.search.total_items + ' events');
  
  console.log('Event listings: ');
  
  //print the title of each event 
  for (var i=0; i< data.search.events.event.length; i++){
  console.log(data.search.events.event[i].title);
  console.log(data.search.events.event[i].postal_code);


  }
  // for(var i in data.search.events){
  //   console.log('what is i:',i);
  //   // console.log(data.search.events[i]);
  //   console.log(data.search.events.event[1].title);
  

  // }
 
});





});

