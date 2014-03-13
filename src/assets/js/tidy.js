(function(){

	'use strict';

	/**
	 * Tidy up visual feedback
	 */
	
	// Cache our selectors
	var feedbackFlash = document.getElementById('slackfeedbackFlash-fafe26266ec73804177c32940be7fac8');
	var progressBar = document.getElementById('slackprogressBar-d2f259380a8c94b1c58625ff2997080e');

	// Remove feedback flash <div>
	feedbackFlash.parentNode.removeChild( feedbackFlash );

	// Update class on progress bar <div>
	progressBar.className = 'slack-progress-bar--finish-2ecffe5697bf627bb6d1e05d7a6c51c8';

	// Remove progress bar <div> after 200ms
	window.setTimeout( function () {
		progressBar.parentNode.removeChild( progressBar );
	}, 200 );

})();