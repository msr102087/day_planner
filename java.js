
// Display Current Date and Time
$(document).ready(function() {

var m = moment();
var displayDate = $('#currentDate');
var todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
displayDate.text(todayDate); 


console.log(m.format("dddd MMM Do YYYY"));

});

// Save User Input from Text Area into Time Slot

// Question about structure of to local storage


var saveBtn = $('.saveBtn');

saveBtn.on('click', function () {

    // Grab the ID

    //"This" means grabbing the parent element IDx

    var hour = $(this).parent().attr("id")

    // "This" means whatever button (element) you clicked on on the page
    // Grabs Value out of input box

    var eventInput = $(this).siblings(".event").val()

    localStorage.setItem(hour, eventInput)


});

$("#9 .event").val(localStorage.getItem("9"));
$("#10 .event").val(localStorage.getItem("10"));
$("#11 .event").val(localStorage.getItem("11"));
$("#12 .event").val(localStorage.getItem("12"));
$("#13 .event").val(localStorage.getItem("13"));
$("#14 .event").val(localStorage.getItem("14"));
$("#15 .event").val(localStorage.getItem("15"));
$("#16 .event").val(localStorage.getItem("16"));
$("#17 .event").val(localStorage.getItem("17"));

// Color Code Time Slots for Past Present and Future Time
// Dont forget to call back function to run
// This will be an if else statement

// Question about how to structure if else statements
function background() {

var currentTime = moment().hours()

$('.time-block').each(function(){
    var timeBlock = $(this).attr('id')
    console.log(timeBlock)


    if (timeBlock < currentTime) { 

        // Add a Class 
        $(this).addClass('past')


    }
    
    else if (timeBlock === currentTime) {

        $(this).addClass('present')
    
    
    }
    
    else {

        $(this).addClass('future')
    
    
    }


})



};

background()

// Clear User Data from Local Storage
var clearBtn

$('#clear').click(function() {
    localStorage.clear();
    location.reload()
});