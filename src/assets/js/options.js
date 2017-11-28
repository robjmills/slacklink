// get values from local storage (if set) and populate form fields
$(function() {

  // show errors in required form fields are empty
  if ( window.location.hash == '#required' ) {
	 // validate form
	 validate();
  }

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

  var channel_override = localStorage.getItem('channel_override');

  // if channel isn't set then set to false
  if( channel_override === null ){
    $('#channel_override_no').prop('checked',true);
  }else{
    $('#channel_override_'+channel_override).prop('checked',true);
  }

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
  localStorage.setItem('channel_override', $('input:radio[name=channel_override]:checked').val() );

  // validate form
  validate();

});

// validate function
function validate(){

  // assume there are no errors
  var errors = false;

  // clear existing errors if there are any
  $( "div.required").removeClass('has-error has-feedback');

  // check all required elements have values
  $( "div.required input" ).each(function(  ) {
	if ( $(this).val() === '' ){
	  errors = true;
	  $(this).parent().addClass('has-error has-feedback');
	}
  });

  // show either error message or success message
  if ( errors === true ) {
	 $('#error').fadeIn('fast').delay(2000).fadeOut('fast');
  } else {
	 $( "#alert" ).fadeIn('fast').delay(2000).fadeOut('fast');
  }
}
