var args = arguments[0] || {};

(function init() {
    if ( OS_IOS ) {
        args.changeStatusBarColor();    
    }
    
    // TODO: Android autofocus handling - god damnit...
    
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    addEventListeners();   
})();

function addEventListeners() {
    $.closeButton.addEventListener( "click" , function() {
        $.containerView.animate({ opacity : 0 , duration : 600 } , args.closeNewDreemView );
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