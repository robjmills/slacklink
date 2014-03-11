slacklink
=========

Post links to Slack from Chrome

installation
=========

* Set up an incoming webhook on your Slack account and grab the API key
* download latest version of slacklink.crx [from here](https://github.com/robjmills/slacklink/raw/master/dist/crx/slacklink.crx)
* open your chrome extensions and drag .crx file into page
* complete the slacklink options through either the extensions page or by right-clicking on the icon
* post the latest meme direct to your slack account

todo
========
* error handling for when configs haven't been added
* add more info to README about setup

a note on security
========

This extension was created for fun (and because I had a hangover). It uses localstorage to store the details you're using including your incoming webhook API key. This means the security is only as safe as your chrome install - If you're concerned about this, don't use it :)