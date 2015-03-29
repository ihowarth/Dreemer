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
    
    // Custom recursive fuinction to remove all children of a view and null everything one at a time
    releaseAllMemoryOfView : function( view ) {
        // Getting the chilldren to null, then removing them from the view
        var childrenArray = view.getChildren();
        view.removeAllChildren();
        
        // Checking if each child has it's own children, recursing the function if they do and nulling them if not
        for ( var i = 0; i < childrenArray.length; i++) {
            var secondChildrenArray = childrenArray[i].getChildren();
            
            if ( secondChildrenArray.length > 0 ) {
                for ( var j = 0; j < secondChildrenArray.length; j++ ) {
                    APP.releaseAllMemoryOfView( secondChildrenArray[j] );
                }
                
            } else {
                childrenArray[i] = null;
            }
        }
    },
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
        minusWidth  : -Ti.Platform.displayCaps.platformWidth  
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
        minusWidth : -360  
    };
}