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
    loggedIn : isLoggedIn()
};


/*
 * Global Variables
 */

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