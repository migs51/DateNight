// $(document).ready(function() {
//     $('.findevents').submit( function(event){
//     event.preventDefault();
//     var event = $(this).find("input[name='event']").val();
//     var location = $(this).find("input[name='zip']").val();
//     showEvents(event,location);
//     console.log(location);
//     $("#ListItems").html('');
//     });
// });

showEvents('music','austin');

function showEvents (e,l) {

var oArgs = {
app_key: "rqJNStmNMPNtvngf",
q: e,
where: l,
page_size: 10,
sort_order: "popularity",
 date:"This week",
};
// var content = '';

var activityDiv = $('<div>');

EVDB.API.call("/events/search", oArgs, function(oData) {
            console.log(oData)
            //Get the title for each item
            for (var i = 0; i < oData.events.event.length;i++) {
                // content += 
                //  '<div class="box"><a href=' +
                // oData.events.event[i].url + '>' +
                //  oData.events.event[i].title + '</a>' + 
                // " at the " + oData.events.event[i].venue_name +
                // " Start Date and Time: " + oData.events.event[i].start_time

                // + '</div>';
                var content = $('<div>');
                var eventImage = $('<img>');

                var title = oData.events.event[i].title;
                var eventTime = oData.events.event[i].start_time;
                eventImage.attr('src', oData.events.event[i].image.medium.url);
                content.html("<h3>" + title + "</h3>" + "<br>" + "<h3>" + eventTime + "</h3>").append(eventImage);
                activityDiv.append(content);

            }
            // Show Data on page
         $("#ListEvents").html(activityDiv);
        });
    }
