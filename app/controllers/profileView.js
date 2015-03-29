var args = arguments[0] || {};


/*
 * Initialisation functions - only executed once
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ opacity : 1 , duration : 600 });
    
    setData();
    
    addEventListeners();   
})();

function addEventListeners() {
	$.backButton.addEventListener( "click" , function() {
		$.containerView.animate({ opacity : 0 , duration : 600 }, args.closeProfileView );
	});
}


/*
 * Main functions
 * 
 * setData
 */

//TODO : Will be used to set the data of the view
function setData() {
	$.twitterHandleLabel.text 	  = "@davidzendoval";
	$.locationLabel.text	  	  = "Guadalajara, Mexico";
	$.amountOfEndorsersLabel.text = "246 endorsers";
}