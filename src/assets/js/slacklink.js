// slacklink.js - send current active URL to slack
$( "#popup-form" ).submit(function( event ) {

	// stop form submitting
	event.preventDefault();

	// hide submit and show progress bar
	$('#submit').hide();
	$('#progress').show();

	// post link to slack
	post();

});

// Submit form on Cmd + Enter or Ctrl + Enter

$('#context').keydown( function ( event ) {

	if ( ( event.ctrlKey || event.metaKey ) && event.keyCode == 13 ) {
		$('#popup-form').submit();
	}

});

function post(){

	chrome.tabs.query({
		active: true,
		'lastFocusedWindow': true  
	}, function(tabs) {

		// active tab URL
		var url = tabs[0].url;
		
		// grab config values from local storage
		
		// required variables
		var domain = localStorage.getItem('domain');
		var apitoken = localStorage.getItem('token');
		
		if ( !domain || !apitoken ) { // Required variables are missing so show alert

			chrome.tabs.create({ url: chrome.extension.getURL("options.html#required") });
			
		} else { // all required variables are set   

			// optional variables (will use default values if not set)
			var channel = localStorage.getItem('channel');
			channel = (channel) ? channel : '#random';

			if ( channel.substring(0, 1) !== '#' ) {
				channel = '#' + channel; // add hash to channel if it's not there
			}

			var username = localStorage.getItem('username');
			username = (username) ? username : 'slacklink';

			var icon_emoji = localStorage.getItem('emoji');
			icon_emoji = (icon_emoji) ? icon_emoji : ':slack:';

			// do we need to add a comment to the URL
			var postcontext = $('#context').val();
			if( postcontext ){
				posttext = ( postcontext + "\n" + url );
			} else {
				posttext = url;
			}

			// payload for slack API request
			var payload = {
				channel: channel,
				username: username,
				text: posttext,
				icon_emoji: icon_emoji,
				unfurl_links: 'true'
			};

			// Insert our visual feedback dependencies
			chrome.tabs.insertCSS( null, { file: 'assets/css/visualfeedback.css' });
			chrome.tabs.executeScript( null, { file: 'assets/js/visualfeedback.js' });

			// make API request to slack
			$.ajax({

				type: 'POST',
				url: 'https://' + domain + '/services/hooks/incoming-webhook?token=' + apitoken,
				data: JSON.stringify(payload)

			}).always(function() {

				// Tidy up our visual feedback dependencies
				chrome.tabs.executeScript( null, { file: 'assets/js/tidy.js' });

				// close popup
				window.close();

			}).fail(function(){

				// Log error if post fails
				console.error('Uh oh, something\'s wrong. Check your Slacklink options');

			});
		}
	});
}
