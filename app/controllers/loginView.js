var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    // If the mainWin isn't open; open it, else; animate the loginView in
    if ( args.isWinOpen == true ) {
		$.containerView.animate({ opacity : 1 , duration : 600 });    	
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
            $.containerView.animate({ opacity  : 0, duration : 600 } , args.closeLoginView );
        }  
    });
}


/*
 * Exported functions
 */

// Used to set the opacity before adding it to the mainWin, so we can fade in nicely
function setViewOpacity0() {
	$.containerView.opacity = 0;
}

exports.setViewOpacity0 = setViewOpacity0;