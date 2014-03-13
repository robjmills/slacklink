// slacklink.js - send current active URL to slack
chrome.browserAction.onClicked.addListener( function ( tab ) {

	'use strict';

	// active tab URL
	var url = tab.url;
	
	// grab config values from local storage
	
	// required variables
	var domain = localStorage.getItem('domain');
	var apitoken = localStorage.getItem('token');
	
	if ( !domain || !apitoken ) { // Required variables are missing so show alert

		chrome.tabs.executeScript( tab.id, { code: 'alert(\'Required variables are missing in your options page\');'});
		
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

		// payload for slack API request
		var payload = {
			channel: channel,
			username: username,
			text: url,
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

		}).fail(function(){

			// Log error if post fails
			console.error('Uh oh, something\'s wrong. Check your Slacklink options');

		});
	}
});