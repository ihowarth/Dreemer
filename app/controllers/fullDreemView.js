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
    
    setupData();
       
    addEventListeners();   
})();

function addEventListeners() {
    $.closeButton.addEventListener( "click" , function() {
        $.containerView.animate({ opacity : 0 , duration : 600 } , args.closeFullDreemView );
    });
    $.containerView.addEventListener( "swipe" , function( e ) {
        if ( e.direction == "right" ) {
          $.containerView.animate({ opacity : 0 , duration : 600 } , args.closeFullDreemView );  
        } 
    });
    
    $.endorseContainer.addEventListener( "click" , function() {
        // TODO: Make endorsment call
        alert( "Endorse" );
    });
}


/*
 * Main functions
 * 
 * setupData
 */

function setupData() {
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