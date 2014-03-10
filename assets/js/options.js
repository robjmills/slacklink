// get values from local storage (if set) and populate form fields
$(function() {
  
  var domain = localStorage.getItem('domain');
  if( domain ) $('#domain').val(domain);

  var token = localStorage.getItem('token');
  if( token ) $('#token').val(token);

  var channel = localStorage.getItem('channel');
  if( channel ) $('#channel').val(channel);

  var username = localStorage.getItem('username');
  if( username ) $('#username').val(username);

  var emoji = localStorage.getItem('emoji');
  if( emoji ) $('#emoji').val(emoji);
  
});

// store values in local storage on submit
$( "#options-form" ).submit(function( event ) {

  // stop form submitting
  event.preventDefault();

  // store values in local storage
  localStorage.setItem('domain', $('#domain').val() );
  localStorage.setItem('token', $('#token').val() );
  localStorage.setItem('channel', $('#channel').val() );
  localStorage.setItem('username', $('#username').val() );
  localStorage.setItem('emoji', $('#emoji').val() );

  // show confirmation dialog and then hide it
  $( "#alert" ).fadeIn('fast').delay(2000).fadeOut('fast');

});