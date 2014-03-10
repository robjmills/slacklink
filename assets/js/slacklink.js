// slacklink.js - send current active URL to slack
chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.query({
	    active: true    
	}, function(tabs) {
	    var tab = tabs[0];
	    url = tab.url;
		
		var domain = localStorage.getItem('domain');
		var apitoken = localStorage.getItem('token');
		var channel = localStorage.getItem('channel');
		var username = localStorage.getItem('username');
		var text = url;
		var icon_emoji = localStorage.getItem('emoji');

		// add hash to channel if it's not there
		if (channel.substring(0, 1) != "#") {
			channel = "#" + channel;
		}

		// payload for slack API request
		var payload = {
			channel: channel,
			username: username,
			text: url,
			icon_emoji: icon_emoji
	 	}

		$.ajax({
		  type: "POST",
		  url: 'https://'+ domain +'/services/hooks/incoming-webhook?token='+apitoken,
		  data: JSON.stringify(payload),
		  dataType: 'json'
		});
	});

});