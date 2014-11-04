var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    if ( OS_IOS ) {
        args.changeStatusBarColor();    
    }
    
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    setData();
       
    addEventListeners();   
})();

function addEventListeners() {
    // On Android, close the dreem view when the back button is pressed
    if ( OS_ANDROID ) {
        args.mainWin.addEventListener( "androidback" , closeFullDreemView );
    }
    
    // Also, we can swpie right to close the view
    $.containerView.addEventListener( "swipe" , function( e ) {
        if ( e.direction == "right" ) {
            closeFullDreemView();
        } 
    });
    
    $.endorseContainer.addEventListener( "click" , function() {
        // TODO: Make endorsment call
        alert( "Endorse" );
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
    args.mainWin.removeEventListener( "androidback" , closeFullDreemView );
    $.containerView.animate({ opacity : 0 , duration : 600 } , args.closeFullDreemView );
}

function setData() {
    // TODO: change these for the real details
    $.titleLabel.text = "An app to share your dreams with the world, and so much more";
    
    $.amountOfEndorsersLabel.text = "100 dreemers endorse this";
    
    $.fullDreemLabel.text = "Imagine an app that could allow you to post the dreams you have for all the world to see.\n\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!" +
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\n\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!" + 
                            "Imagine an app that could allow you to post the dreams you have for all the world to see.\n\nIt would be a great way to share ideas and get feedback from everyone around the world, instant gratification, instant karma!";
    
    // $.twitterIcon.image      = ;
    $.twitterHandleLabel.text   = "@davidzendoval";
    $.twitterLocationLabel.text ="Guadalajara, Mexico"; 
}