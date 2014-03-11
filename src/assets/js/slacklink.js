// slacklink.js - send current active URL to slack
chrome.browserAction.onClicked.addListener(function(tab) {
  // active tab URL
  url = tab.url;  
  // grab config values from local storage
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
      icon_emoji: icon_emoji,
      unfurl_links: "true"
  }

  $.ajax({
    type: "POST",
    url: 'https://'+ domain +'/services/hooks/incoming-webhook?token='+apitoken,
    data: JSON.stringify(payload),
    dataType: 'json'
  });
});