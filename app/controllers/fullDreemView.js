var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ left : 0 , right : 0 , duration : 600 });
    
    setData();
       
    addEventListeners();   
})();

function addEventListeners() {
    // On iOS, we close the fullDreemView by swiping right or by cicking the close chevron
    if ( OS_IOS ) {
        $.containerView.addEventListener( "swipe" , function( e ) {
	        if ( e.direction == "right" ) {
	            closeFullDreemView();
	        } 
	    });
	    $.closeChevron.addEventListener( "click" , function( e ) {
	        closeFullDreemView();
	    });
        
    } else {
        // On Android, close the fullDreemView when the back button is pressed
    	args.mainWin.addEventListener( "androidback" , closeFullDreemView );
    }
    
    
    $.endorseContainer.addEventListener( "click" , function() {
        // TODO: Make endorsment call
        var endorseView = Alloy.createController( "prototypes/endorseViewWithAnimation" , { 
            closeEndorseView : function() {
                $.containerView.remove( endorseView );  
                APP.releaseAllMemoryOfView( endorseView );      
            }  
        }).getView();
        
        $.containerView.add( endorseView ); 
    });
    
    $.twitterDetailsContainer.addEventListener( "click" , function() {
        // TODO: Open users profile
        alert( "Open user profile" );
    });
    
    $.flagDreemView.addEventListener( "click" , function() {
        // TODO: Flag post
        alert( "Flag" ); 
    });
}


/*
 * Main functions
 * 
 * 
 * closeFullDreemView
 * 
 * setData
 */

function closeFullDreemView() {
    if ( OS_ANDROID ) {
        args.mainWin.removeEventListener( "androidback" , closeFullDreemView );    
    }
    
    $.containerView.animate({ left : Alloy.Globals.deviceMeasurements.width , right : Alloy.Globals.deviceMeasurements.minusWidth , duration : 600 } , args.closeFullDreemView );
}


// TODO: change these for the real details
function setData() {
    $.titleLabel.text = "An app to share your dreems with the world, and so much more";
    
    $.amountOfEndorsersLabel.text = " 100 Dreemers endorse this";
    
    // Always set an extra 2 lines of white space after the Dreem details because 
    // the overhanging 'endorseButton' can cover up some text otherwise
    $.fullDreemLabel.text = "Imagine an app that could allow you to post the dreems you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreems you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" + 
                            "Imagine an app that could allow you to post the dreems you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreems you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreems you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!"
                            +"\n\n";
    
    // $.twitterIcon.image      = ;
    $.twitterHandleLabel.text   = "@davidzendoval";
    $.twitterLocationLabel.text ="Guadalajara, Mexico"; 
}