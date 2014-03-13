(function(){

	'use strict';

	/**
	 * Feedback Flash
	 * - Add flash effect to DOM
	 */

	// Create alertFlash <div> Element
	var alertFlash = document.createElement( 'div' );

	// Insert alertFlash <div>
	document.body.insertBefore( alertFlash, document.body.firstChild );

	// Give alertFlash <div> element an ID
	alertFlash.id ='slackfeedbackFlash-fafe26266ec73804177c32940be7fac8';

	/**
	 * Progress Bar
	 * - Insert progress bar into DOM
	 */

	 // Create progressBar <div> Element
	var progressBar = document.createElement( 'div' );

	// Insert progressBar <div>
	document.body.insertBefore( progressBar, document.body.firstChild );

	// Give progressBar <div> element an ID
	progressBar.id ='slackprogressBar-d2f259380a8c94b1c58625ff2997080e';

	// Give progressBar <div> a class
	progressBar.className = 'slack-progress-bar--start-ceac36a480298564f4fac58d64bc62c9';

})();