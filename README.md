# Slacklink

**Post links to Slack from Chrome**

## Installation
* Set up an [incoming webhook](https://my.slack.com/services/new/incoming-webhook) on your Slack account and grab the API key
* [download](https://github.com/robjmills/slacklink/raw/master/dist/crx/slacklink.crx) latest version of slacklink.crx 
````
https://github.com/robjmills/slacklink/raw/master/dist/crx/slacklink.crx
````
* open your chrome extensions
````
Settings -> Tools -> Extensions or chrome://extensions/
```` 
* Drag `.crx` file into page and drop it
* Complete the slacklink options through either the extensions page or by right-clicking on the icon - you **must** complete Domain and API Key
* You can now post a link direct to your chosen slack channel by clicking the slack icon

## A note on security
This extension was created for fun (and because I had a hangover). It uses localstorage to store the details you're using including your incoming webhook API key. This means the security is only as safe as your chrome install - If you're concerned about this, don't use it :)

## Contributing
At the moment you won't be able to build this extension yourself without my private key. However, you can modify all code within the `src` directory and then load this into chrome://extensions/ using "Load Unpacked Extension". If you think you've made some useful feature or security updates then please send through a pull request.

## Release History
- 0.0.11 - Show options page if required variables are missing
- 0.0.10 - Refactored visual feedback [by m10l](https://github.com/m10l)
- 0.0.9  - Added simple visual feedback for successful posts [by m10l](https://github.com/m10l)
- 0.0.8  - Basic check for required fields added
- 0.0.7  - Another attempt at forcing links to be expanded
- 0.0.6  - Links should be expanded at Slack
- 0.0.5  - Updated icon
- 0.0.4  - New icon courtesy of Chris from [devteaminc.co](http://devteaminc.co)
- 0.0.3  - Updated options page
- 0.0.2  - Added autoupdate
- 0.0.1  - First release