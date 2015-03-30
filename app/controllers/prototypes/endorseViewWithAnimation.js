var args = arguments[0] || {};


 /* Initialisation functions - only executed once
 * 
 * 
 * init
 * addEventListeners
 */

(function init() {
    $.containerView.animate({ opacity : 1 , duration : 500 } , animateStarShrinking );
})();

function addEventListeners() {
    
}


/*
 * Main functions
 * 
 * 
 * closeEndorseView
 * 
 * animateStarSmaller
 */

function closeEndorseView() {
    //TODO: add sound byte when star has hit
    $.containerView.animate({ opacity : 0 , duration : 500 } , args.closeEndorseView );
}


function animateStarShrinking() {
    $.endorseImageView.animate({ height : 110 , width : 100 , duration : 400 } , function() {
        setTimeout( closeEndorseView , 600) ;
    });   
}