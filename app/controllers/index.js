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
    
    $.dreemsTable.addEventListener( "click" , function( e ) {
        // TODO: Pass correct data to full dreem
        var fullDreemView = Alloy.createController( "fullDreemView" , {
            // Used to remove the newDreenView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
            closeFullDreemView   : function() {
                if ( OS_IOS ) {
                    // Change status bar black
                    $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
                }
                    
                $.mainWin.remove( fullDreemView );
            },
            changeStatusBarColor : function() {
                // Change status bar white
                $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.DEFAULT;
            }
        }).getView();
            
        $.mainWin.add( fullDreemView );
    });
    
    $.mainWin.addEventListener( "swipe" , function( e ){
        //If left; show random dreem, else; open newDreamView
        if ( e.direction == "left" ) {
            
            
        } else {
            
        }
    });
    
    $.profileButton.addEventListener( "click" , function() {
        // If the user is not logged in; open loginView, else; open the user's profile
        if ( !APP.loggedIn ) {
            openLoginView();
            
        } else {
            // TODO: Open profile
        }
    });
    
    $.postButton.addEventListener( "click" , function() {
        // If the user is logged in; open the postView, else; do something else 
        // TODO : APP.loggedIn
        if ( true ) {
            var newDreemView = Alloy.createController( "newDreemView" , {
                // Used to remove the newDreenView from inside itself, after fading it out nicely. We're also changing the iOS status bar color here
                closeNewDreemView       : function() {
                    if ( OS_IOS ) {
                        // Change status bar black
                        $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
                    }
                    
                    $.mainWin.remove( newDreemView );
                },
                changeStatusBarColor : function() {
                    // Change status bar white
                    $.mainWin.statusBarStyle = Titanium.UI.iPhone.StatusBar.DEFAULT;
                }
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
    var loginView = Alloy.createController( "loginView" , {
        // Done to remove the loginView elegantly inside the controller
        closeLoginView : function() {
            $.mainWin.remove( loginView );
        },
        openMainWin    : function() {
            $.mainWin.open();
        },
        isWinOpen      : isWinOpen
    }).getView();
    
    // Added separately using a variable so I can also use that reference to remove the view
    $.mainWin.add( loginView );
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