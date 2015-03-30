var args = arguments[0] || {};


/*
 * Initialisation functions - only executed once
 * 
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    setData();
    
    // Handles the highlighting of the labels for the Dreems control switch
    if ( OS_ANDROID ) {
        switchDreemsControl();
    }
    
    // Handle showing different tables and changing no results label text.
    switchDreemsTable();
    
    addEventListeners();   
})();

function addEventListeners() {
	$.backButton.addEventListener( "click" , function() {
        closeProfileView();
    });
	
	// Handle the Android backbutton event
    if ( OS_ANDROID ) {
        // On Android, close the fullDreemView when the back button is pressed
        args.mainWin.addEventListener( "androidback" , closeProfileView );
    }
	
	$.logoutButton.addEventListener( "click" , function() {
	    //TODO: Handle logout confirmation in an alert and actual ACS logout.
	    alert("Logout");
	});
	
	if ( OS_IOS ) {
    	$.dreemsControlTabbedBar.addEventListener( "click" , function( e ) {
    	    // Handles the changing of the Dreems tables
    	    switchDreemsTable();
    	});
    
    } else {
        $.dreemsControlContainerView.addEventListener( "click" , function( e ) {
            // customSwitchValue true is for 'My Dreems' and false is for 'Endorsed' - default is true.
            if ( $.dreemsControlContainerView.customSwitchValue == false ) {
                $.dreemsControlContainerView.customSwitchValue = true;
                
            } else {
                $.dreemsControlContainerView.customSwitchValue = false;
            }
            
            // Handles the changing of the Dreems control switch
            switchDreemsControl();
            
            // Handles the changing of the Dreems tables
            switchDreemsTable();
        }); 
    }
}


/*
 * Main functions
 * 
 * 
 * closeProfileView
 * 
 * setData
 * fillMyDreemsTable
 * filEndorsedTable
 * 
 * switchDreemsTable
 * showNoResults
 * switchDreemsControl - Android only
 */

function closeProfileView() {
    if ( OS_ANDROID ) {
        args.mainWin.removeEventListener( "androidback" , closeProfileView ); 
    }
    
    $.containerView.animate({ opacity : 0 , duration : 600 }, args.closeProfileView );   
}


//TODO : Will be used to set the data of the view
function setData() {
	$.twitterHandleLabel.text 	  = "@davidzendoval";
	$.locationLabel.text	  	  = "Guadalajara, Mexico";
	$.amountOfEndorsersLabel.text = "246 endorsers";
}

//TODO: Use Alloy collections to fill the Dreems table with data - Can we reuse 'prototypes/dreemSummaryView'?
function fillMyDreemsTable() {
    
}

//TODO: Use Alloy collections to fill the Endorsed table with data - Can we reuse 'prototypes/dreemSummaryView'?
function filEndorsedTable() {
    
}


// Switches the visibility of the 'My Dreems' and 'Endorsed' tables as necessary.
function switchDreemsTable() {
    if ( (OS_IOS && $.dreemsControlTabbedBar.index == 0) || (OS_ANDROID && $.dreemsControlContainerView.customSwitchValue == true) ) {
        //TODO: If user has posted any Dreems
        if ( false ) {
            $.endorsedDreemsTable.visible = false;
            $.myDreemsTable.visible = true;
        
        } else {
            showNoResults();
        }
        
    } else {
        //TODO: If user has endorsed any Dreems
        if ( false ) {
            $.myDreemsTable.visible = false;
            $.endorsedDreemsTable.visible = true;
            
        } else {
            showNoResults();
        }
    }
}

// Hides the tables because they have no results and switches the 'noResultsLabel' as necessary
function showNoResults() {
    $.myDreemsTable.visible = false;
    $.endorsedDreemsTable.visible = false;
    
    if ( (OS_IOS && $.dreemsControlTabbedBar.index == 0) || (OS_ANDROID && $.dreemsControlContainerView.customSwitchValue == true) ) {
        $.noResultsLabel.text = "You haven't shared any\ndreems yet";
        
    } else {
        $.noResultsLabel.text = "You haven't endorsed any\ndreems yet";
    }
    
    $.noResultsContainerView.visible = true;
}

// Handles the witch of the custom 'tabbedbar' controls for Android
function switchDreemsControl() {
    var selectedControl;
    var unselectedControl;
    
    if ( $.dreemsControlContainerView.customSwitchValue == true ) {
        selectedControl   = $.myDreemsControlLabel;
        unselectedControl = $.endorsedControlLabel;
        
    } else {
        selectedControl   = $.endorsedControlLabel;
        unselectedControl = $.myDreemsControlLabel;
    }

    selectedControl.color           = "#fff";
    selectedControl.backgroundColor = "#671eb0";
    
    unselectedControl.color           = "#ccc";
    unselectedControl.backgroundColor = "#777"; 
}