var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * 
 * init
 * addEventListeners
 */

(function init() {
    // If the mainWin isn't open; open it, else; animate the loginView in
    if ( args.isWinOpen == true ) {
		$.containerView.animate({ left : 0 , right : 0 , duration : 400 });    	
    }
    
    addEventListeners();   
})();

function addEventListeners() {
    $.twitterConnectContainer.addEventListener( "click" , function() {
        //TODO: Connect to twitter dialog 
        alert( "Open twitter dialog" );
    });
    
    $.containerView.addEventListener( "swipe" , function( e ) {
        if ( e.direction == "left" ) {
            $.containerView.animate({ left : Alloy.Globals.deviceMeasurements.minusWidth, right : Alloy.Globals.deviceMeasurements.width, duration : 400 } , args.closeLoginView );
        }  
    });
}


/*
 * Exported functions
 * 
 * 
 * setViewOffscreen
 */

// Used to set the opacity before adding it to the mainWin, so we can fade in nicely
function setViewOffscreen() {
	$.containerView.left = Alloy.Globals.deviceMeasurements.minusWidth;
	$.containerView.right = Alloy.Globals.deviceMeasurements.width;
}

exports.setViewOffscreen = setViewOffscreen;