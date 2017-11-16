
///hide guesswho (jumbotron text)
$(".guesswho").hide().show("slow");

//show guesswho(jumbotron text)-slow


// hide name validation error message
$(function() {
  $("#name_error_message").hide();


var error_name = false;
// run function to make sure there is text in name field when clicking out
$("#name").focusout(function()
{
  // alert("Tell Bill your name.");
  check_name();
});

// function to to check name is entered
function check_name(){
var name_length = $("#name").val().length;

if(name_length < 1) {
  $("#name_error_message").show();
  error_name = true;
} else {
  $("#name_error_message").hide();
}
}
});

// hide phone validation error message
$(function() {
  $("#phone_error_message").hide();


var error_name = false;
// run function to make sure there is text in phone field when clicking out
$("#phone").focusout(function()
{
  check_phone();
});

// function to to check phone is entered
function check_phone(){
var phone_length = $("#phone").val().length;

if(phone_length < 10) {
  $("#phone_error_message").show();
  error_name = true;
} else {
  $("#phone_error_message").hide();
}
}
});
