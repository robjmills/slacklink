slacklink
=========

Post links to Slack from Chrome

installation
=========

* Set up an incoming webhook on your Slack account and grab the API key
* download latest version of slacklink.crx [from here](https://github.com/robjmills/slacklink/raw/master/dist/crx/slacklink.crx)
* open your chrome extensions and drag .crx file into page
* complete the slacklink options through either the extensions page or by right-clicking on the icon
* post a link direct to your slack account from chrome by clicking the icon

todo
========
* error handling for when configs haven't been added
* add more info to README about setup

a note on security
========

This extension was created for fun (and because I had a hangover). It uses localstorage to store the details you're using including your incoming webhook API key. This means the security is only as safe as your chrome install - If you're concerned about this, don't use it :)

contributing
========

At the moment you won't be able to build this extension yourself without my private key. Feel free to dig around in the source, and fork or whatever though really.


Release History
========

- 0.0.8 - Basic check for required fields added
- 0.0.7 - Another attempt at forcing links to be expanded
- 0.0.6 - Links should be expanded at Slack
- 0.0.5 - Updated icon
- 0.0.4 - New icon courtesy of Chris from [devteaminc.co](http://devteaminc.co)
- 0.0.3 - Updated options page
- 0.0.2 - Added autoupdate
- 0.0.1 - First release