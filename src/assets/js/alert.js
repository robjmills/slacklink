(function(){

	'use strict';

	// Create alertFlash <div> Element
	var alertFlash = document.createElement( 'div' );

	// Insert alertFlash <div>
	document.body.insertBefore( alertFlash, document.body.firstChild );

	// Give alertFlash <div> element an ID (slack-md5(slash))
	alertFlash.id ='slack-c25033a972715dbbdb7e73ac79261230';

	// Remove alertFlash <div> element after 200ms 
	window.setTimeout( function () {
		alertFlash.parentNode.removeChild( alertFlash );
	}, 200 );

})();