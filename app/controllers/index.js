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
        //If left; show random dreem, else; open newDreamView
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
            },
            changeStatusBarColorBlack : function() {
                // Change status bar black
                $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.DEFAULT;   
            },
            changeStatusBarColorWhite : function() {
                // Change status bar white
                $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;   
            },
            mainWin : $.mainWin
        }).getView();
            
        $.mainWin.add( fullDreemView );
    });
    
    $.profileButton.addEventListener( "click" , function() {
        // If the user is not logged in; open loginView, else; open the user's profile
        // TODO: !APP.loggedIn
        if ( true ) {
            openLoginView();
            
        } else {
	        var profileView = Alloy.createController( "profileView" , {
	            // Used to remove the profileView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
	            closeProfileView   : function() {
	                $.mainWin.remove( profileView );
	            }
	        }).getView();
	            
	        $.mainWin.add( profileView );
        }
    });
    
    $.postButton.addEventListener( "click" , function() {
        // If the user is logged in; open the postView, else; do something else 
        // TODO : APP.loggedIn
        if ( true ) {
            var newDreemView = Alloy.createController( "newDreemView" , {
                // Used to remove the newDreenView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
                closeNewDreemView       : function() {
                    $.mainWin.remove( newDreemView );
                },
                // Needs an iOS check because it's used as a callback
                changeStatusBarColorBlack : function() {
                	if ( OS_IOS ) {
                		// Change status bar black	
                    	$.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.DEFAULT;	
                	}
                },
                changeStatusBarColorWhite : function() {
                	// Change status bar white
                    $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;	
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
 * openLoginView
 */

function openLoginView() {
    var loginController = Alloy.createController( "loginView" , {
        // Done to remove the loginView elegantly inside the controller
        closeLoginView : function() {
            $.mainWin.remove( loginView );
        },
        isWinOpen      : isWinOpen
    });
    
    var loginView = loginController.getView();
    
    // Used to set the opacity to 0, so we can fade in nicely. This is necessary becasue 
    // we need the opacity to be 1 normally, so we don't get a flicker if the login page is opened first
    if ( isWinOpen == true ) {
    	loginController.setViewOpacity0();
    }
    
    // Added separately using a variable so I can also use that reference to remove the view
    $.mainWin.add( loginView );
    
    if ( isWinOpen == false ) {
    	$.mainWin.open();
    }
}




/*
 * Temp test functions
 * 
 * getTestView
 * addViewsToScroller
 */

function getTestView() {
    return Alloy.createController( "prototypes/dreemSummaryView" , {
        dreemTitle   : "An app to make your dreams come true and so much more",
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