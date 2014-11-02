/*
 * Functions for APP singleton
 */

function isLoggedIn() {
    // If user is logged in, return true
    // TODO: check for user twitter token in if statement
    if ( false ) {
        return true;
        
    } else {
        return false;
    }
}


/*
 * APP singleton
 */
var APP = {
    // User login check
    loggedIn : isLoggedIn(),
    
    isiOS7Plus : function isiOS7Plus() {
        // iOS-specific test
        if ( Ti.Platform.name == "iPhone OS" ) {
            var version = Titanium.Platform.version.split( "." );
            var major   = parseInt( version[0] , 10 );
    
            // Can only test this support on a 3.2+ device
            if ( major >= 7 ) {
                return true;
            }
        }
        
        return false;
    }
};


/*
 * Global Variables
 */

// Handling iOS6/7 top 
if ( APP.isiOS7Plus() ) {
    Alloy.Globals.styleSizes = {
        viewTop      : 0,
        navBarHeight : 64
    };
    
} else {
    Alloy.Globals.styleSizes = {
        viewTop      : 20,
        navBarHeight : 44
    };
}


// Make Globals for iOS and Android, for easy changing later
if ( OS_IOS ) {
    Alloy.Globals.fonts = {
        regularFont : "HelveticaNeue",
        lightFont   : "HelveticaNeue-Light"
    };
    
} else {
    Alloy.Globals.fonts = {
        regularFont : "Roboto Regular",
        lightFont   : "Roboto Light"
    };
}