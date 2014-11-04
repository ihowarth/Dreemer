var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    if ( OS_IOS ) {
        args.changeStatusBarColorBlack();    
    }
    
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    setData();
       
    addEventListeners();   
})();

function addEventListeners() {
    // On Android, close the fullDreemView when the back button is pressed
    if ( OS_IOS ) {
        $.containerView.addEventListener( "swipe" , function( e ) {
	        if ( e.direction == "right" ) {
	            closeFullDreemView();
	        } 
	    });
        
    // On iOS, we close the fullDreemView by swiping right
    } else {
    	args.mainWin.addEventListener( "androidback" , closeFullDreemView );
    }
    
    
    $.endorseContainer.addEventListener( "click" , function() {
        // TODO: Make endorsment call
        alert( "Do awesome animation and endorse" );
    });
    
    $.twitterDetailsContainer.addEventListener( "click" , function() {
        // TODO: Open users profuile
        alert( "Open user profile" );
    });
}


/*
 * Main functions
 * 
 * closeFullDreemView
 * setData
 */

function closeFullDreemView() {
    if ( OS_IOS ) {
        args.changeStatusBarColorWhite();
            
    } else {
        args.mainWin.removeEventListener( "androidback" , closeFullDreemView );    
    }
    
    $.containerView.animate({ opacity : 0 , duration : 600 } , args.closeFullDreemView );
}

// TODO: change these for the real details
function setData() {
    $.titleLabel.text = "An app to share your dreams with the world, and so much more";
    
    $.amountOfEndorsersLabel.text = "100 dreemers endorse this";
    
    $.fullDreemLabel.text = "Imagine an app that could allow you to post the dreams you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" + 
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!\n\n" +
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!";
    
    // $.twitterIcon.image      = ;
    $.twitterHandleLabel.text   = "@davidzendoval";
    $.twitterLocationLabel.text ="Guadalajara, Mexico"; 
}