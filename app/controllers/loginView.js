var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    // If the mainWin isn't open; open it, else; animate the loginView in
    if ( args && args.isWinOpen == false ) {
        $.containerView.opacity = 1;
        args.openMainWin(); 
        
    } else {
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