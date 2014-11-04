var args = arguments[0] || {};

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ top : 0 , bottom : 0 , duration : 300 } , function() {
        if ( OS_IOS ) {
            args.changeStatusBarColorWhite();    
        }
    });
    
    addEventListeners();   
})();

function addEventListeners() {
    $.closeButton.addEventListener( "click" , function() {
        args.changeStatusBarColorBlack();
        $.containerView.animate({ top : Alloy.Globals.deviceMeasurements.height , bottom : Alloy.Globals.deviceMeasurements.minusHeight , duration : 300 } , args.closeNewDreemView );
    });   
    $.containerView.addEventListener( "swipe" , function( e ) {
        if ( e.direction == "right" ) {
            args.changeStatusBarColorBlack();
            $.containerView.animate({ top : Alloy.Globals.deviceMeasurements.height , bottom : Alloy.Globals.deviceMeasurements.minusHeight , duration : 300 } , args.closeNewDreemView );
        }
    });
    
    // Handle the focusing and bluring of the title textArea, as we have to do the hint text manually in textAreas because of iOS
    function removeTitleHintText() {
        $.dreamTitleTextArea.removeEventListener( "focus" , removeTitleHintText );
        
        $.dreamTitleTextArea.value = "";
    }
    $.dreamTitleTextArea.addEventListener( "focus" , removeTitleHintText );
    
    $.dreamTitleTextArea.addEventListener( "blur" , function() {
        if ( $.dreamTitleTextArea.value == "" ) {
            $.dreamTitleTextArea.value = "Dream title...";
            $.dreamTitleTextArea.addEventListener( "focus" , removeTitleHintText );
        }   
    });
    
    // Handle the focusing and bluring of the dreem textArea, as we have to do the hint text manually in textAreas because of iOS
    function removeImagineHintText() {
        $.imagineTextArea.removeEventListener( "focus" , removeImagineHintText );
        
        $.imagineTextArea.value = "";
    }
    $.imagineTextArea.addEventListener( "focus" , removeImagineHintText );
    
    $.imagineTextArea.addEventListener( "blur" , function() {
        if ( $.imagineTextArea.value == "" ) {
            $.imagineTextArea.value = "Imagine...";
            $.imagineTextArea.addEventListener( "focus" , removeImagineHintText );
        }   
    });
    
    $.postButton.addEventListener( "click" , function() {
        // TODO: Post dream 
        alert( "Post dream" );
    });
}