
// Display Current Date and Time
$(document).ready(function() {

var m = moment();
var displayDate = $('#currentDate');
var todayDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
displayDate.text(todayDate); 


console.log(m.format("dddd MMM Do YYYY"));

});

// Save User Input from Text Area into Time Slot
var eventInput
var saveBtn 

localStorage.setItem("eventInput")

// Color Code Time Slots for Past Present and Future Time


// Clear User Data from Local Storage
var clearBtn

$('#clear').click(function() {
    localStorage.clear();
    location.reload()
});