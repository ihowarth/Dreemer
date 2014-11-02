var args = arguments[0] || {};


/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.titleLabel.text         = args.dreemTitle;
    $.twitterHandleLabel.text = args.userHandle;
    $.locationLabel.text      = args.userLocation;
   
    addEventListeners();    
})();

function addEventListeners() {
    
}