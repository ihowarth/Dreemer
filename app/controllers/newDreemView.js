var args = arguments[0] || {};

var postValid = false;

/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    // Show status bar on iOS
    if ( OS_IOS ) {
        $.containerView.animate({ top : 20 , bottom : 0 , duration : 300 });
            
    } else {
        $.containerView.animate({ top : 0 , bottom : 0 , duration : 300 });
    }
        
    addEventListeners();   
})();

function addEventListeners() {
    if ( OS_IOS ) {
        $.swipeDownView.addEventListener( "swipe" , function( e ) {
            if ( e.direction == "down" ) {
                closeNewDreemView();
            }
        });
        $.closeChevron.addEventListener( "click" , function( e ) {
            closeNewDreemView();
        });
            
    } else {
        args.mainWin.addEventListener( "androidback" , closeNewDreemView );
    }
    
    // Handle the focusing and bluring of the title textArea, as we have to do the hint text manually in textAreas because of iOS
    function removeTitleHintText() {
        $.dreamTitleTextArea.removeEventListener( "focus" , removeTitleHintText );
        
        $.dreamTitleTextArea.value = "";
    }
    $.dreamTitleTextArea.addEventListener( "focus" , removeTitleHintText );
    
    $.dreamTitleTextArea.addEventListener( "blur" , function() {
        if ( $.dreamTitleTextArea.value == "" ) {
            $.dreamTitleTextArea.value = "Dreem title...";
            $.dreamTitleTextArea.addEventListener( "focus" , removeTitleHintText );
        }   
    });
    
    // Handle the focusing and bluring of the dreem textArea, as we have to do the hint text manually in textAreas because of iOS
    function removeDetailsHintText() {
        $.dreamDetailsTextArea.removeEventListener( "focus" , removeDetailsHintText );
        
        $.dreamDetailsTextArea.value = "";
    }
    $.dreamDetailsTextArea.addEventListener( "focus" , removeDetailsHintText );
    
    $.dreamDetailsTextArea.addEventListener( "blur" , function() {
        if ( $.dreamDetailsTextArea.value == "" ) {
            $.dreamDetailsTextArea.value = "What is your dreem about?";
            $.dreamDetailsTextArea.addEventListener( "focus" , removeDetailsHintText );
        }   
    });
    
    // If the text fields are changed, do the check to change the postDreem button and postInfoLabel
    $.dreamTitleTextArea.addEventListener( "change" , function() {
         checkIfPostable();
    });
    $.dreamDetailsTextArea.addEventListener( "change" , function() {
         checkIfPostable();
    });
    
    $.postButtonView.addEventListener( "click" , function() {
        // TODO: Post dream 
        if ( postValid == false ) {
            alert( "Dreem title and details must be filled in before posting" );    
        } else {
            alert( "Post dreem" );
        }
    });
}


/*
 * Main functions
 * 
 * closeNewDreemView
 * checkIfPostable
 */

function closeNewDreemView() {
    if ( OS_ANDROID ) {
   		args.mainWin.removeEventListener( "androidback" , closeNewDreemView );
    }
    
    $.containerView.animate({ top : Alloy.Globals.deviceMeasurements.height , bottom : Alloy.Globals.deviceMeasurements.minusHeight , duration : 300 });
}

// Checks to see if both text fields have valid data and allows the 
function checkIfPostable() {
    if ( $.dreamTitleTextArea.value != ""   && $.dreamTitleTextArea.value != "Dreem title..."              && $.dreamTitleTextArea.value.length > 15 &&
         $.dreamDetailsTextArea.value != "" && $.dreamDetailsTextArea.value != "What is your dreem about?" && $.dreamDetailsTextArea.value.length > 50 ) {
             
        postValid = true;     
        
        $.infoView.animate({ opacity : 0 });
        $.postButtonView.animate({ backgroundColor : "#50a0fa" });
        if ( OS_IOS ) {
            $.postButtonLabel.animate({ color : "#fff" });    
        } else {
            $.postButtonLabel.color = "#fff";
        }
               
    } else {
        postValid = false;
        
        $.infoView.animate({ opacity : 1 });
        $.postButtonView.animate({ backgroundColor : "#eee" });
        if ( OS_IOS ) {
            $.postButtonLabel.animate({ color : "#666" });    
        } else {
            $.postButtonLabel.color = "#666";
        }
        
    }
}