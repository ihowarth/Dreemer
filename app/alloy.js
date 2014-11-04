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
    
    Alloy.Globals.deviceMeasurements = {
        height : Ti.Platform.displayCaps.platformHeight,
        width  : Ti.Platform.displayCaps.platformWidth,
        
        minusHeight : -Ti.Platform.displayCaps.platformHeight,
        minuesWidth : -Ti.Platform.displayCaps.platformWidth  
    };;
    
} else {
    Alloy.Globals.fonts = {
        regularFont : "Roboto Regular",
        lightFont   : "Roboto Light"
    };
    
    Alloy.Globals.deviceMeasurements = {
        height : 567,
        width  : 360,
        
        minusHeight : -567,
        minuesWidth : -360  
    };;
}