var args = arguments[0] || {};


/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    setData();
    
    addEventListeners();   
})();

function addEventListeners() {
	$.backButton.addEventListener( "click" , function() {
		$.containerView.animate({ opacity : 0 , duration : 600 }, args.closeProfileView );
	});
	$.dreemsControlTabbedBar.addEventListener( "click" , function( e ) {
	    //TODO: Handle showing different tables and changing no results label text.
	    // Index 0 is for 'My Dreems' and 1 is for 'Endorsed'
	    if ( e.index == 0 ) {
	        
	        
	    } else {
	        
	    }
	});
}


/*
 * Main functions
 * 
 * setData
 */

//TODO : Will be used to set the data of the view
function setData() {
	$.twitterHandleLabel.text 	  = "@davidzendoval";
	$.locationLabel.text	  	  = "Guadalajara, Mexico";
	$.amountOfEndorsersLabel.text = "246 endorsers";
}