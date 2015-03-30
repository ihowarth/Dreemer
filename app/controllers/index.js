/*
 * Global variables (to this file)
 */

var isWinOpen = false; 


/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    addEventListeners();
    
    // TODO: Temp test, will be removed
    addViewsToScroller();
    
    // If the user is not logged in; open loginView, else; skip login
    if ( !APP.loggedIn ) {
        openLoginView();
        
    } else {
        $.mainWin.open();   
    }
})();

function addEventListeners() {
    $.mainWin.addEventListener( "open" , function() {
        isWinOpen = true;
    });
    
    $.mainWin.addEventListener( "swipe" , function( e ){
        // If left; show random dreem, else; open fullDreamView
        //TODO: fix swipes
        if ( e.direction == "left" ) {
            
            
        } else {
            
        }
    });
    
    $.dreemsTable.addEventListener( "click" , function( e ) {
        // TODO: Pass correct data to full dreem
        var fullDreemView = Alloy.createController( "fullDreemView" , {
            // Used to remove the fullDreemView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
            closeFullDreemView   : function() {
                $.mainWin.remove( fullDreemView );
                APP.releaseAllMemoryOfView( fullDreemView );
            },
            mainWin : $.mainWin
        }).getView();
            
        $.mainWin.add( fullDreemView );
    });
    
    $.profileButton.addEventListener( "click" , function() {
        // If the user is not logged in; open loginView, else; open the user's profile
        // TODO: !APP.loggedIn
        if ( false ) {
            openLoginView();
            
        } else {
	        var profileView = Alloy.createController( "profileView" , {
	            // Used to remove the profileView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
	            closeProfileView   : function() {
	                $.mainWin.remove( profileView );
	                APP.releaseAllMemoryOfView( profileView );
	            },
	            mainWin : $.mainWin
	        }).getView();
	            
	        $.mainWin.add( profileView );
        }
    });
    
    $.composeButton.addEventListener( "click" , function() {
        // If the user is logged in; open the postView, else; do something else 
        // TODO : APP.loggedIn
        if ( true ) {
            var newDreemView = Alloy.createController( "newDreemView" , {
                // Used to remove the newDreenView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
                closeNewDreemView       : function() {
                    $.mainWin.remove( newDreemView );
                    APP.releaseAllMemoryOfView( newDreemView );
                },
                mainWin : $.mainWin
            }).getView();
            
            $.mainWin.add( newDreemView );
            
        } else {
            // TODO: Handle when a user is not logged in, what is expected to happen? Alert that directs to login or cancel?
        }
    });
}


/*
 * Main functions
 * 
 * 
 * openLoginView
 */

function openLoginView() {
    var loginController = Alloy.createController( "loginView" , {
        // Done to remove the loginView elegantly inside the controller
        closeLoginView : function() {
            $.mainWin.remove( loginView );
            APP.releaseAllMemoryOfView( loginView );
        },
        isWinOpen      : isWinOpen
    });
    
    var loginView = loginController.getView();
    
    // Used to set the view off screen, so we can slide it in nicely. This is necessary becasue 
    // we need the view to be centered normally, so we can see it if the login page is opened first
    if ( isWinOpen == true ) {
    	loginController.setViewOffscreen();
    }
    
    // Added separately using a variable so I can also use that reference to remove the view
    $.mainWin.add( loginView );
    
    if ( isWinOpen == false ) {
    	$.mainWin.open();
    }
}


//TODO: Add one fake dreem to the top of the list, showing the user how to find random dreems

/*
 * Temp test functions
 * 
 * getTestView
 * addViewsToScroller
 */

function getTestView() {
    return Alloy.createController( "prototypes/dreemSummaryView" , {
        dreemTitle   : "An app to make your dreems come true and so much more",
        userHandle   : "@davidzendoval",
        userLocation : "Guadalajara, Mexico"
    }).getView();
}

function addViewsToScroller() {
    var data = [];
    
    for ( var i = 0; i < 20; i++ ) {
        data.push( getTestView() );
    }
    
    $.dreemsTable.setData( data );
}