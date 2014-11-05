var args = arguments[0] || {};



(function init() {
    $.containerView.animate({ opacity : 1 , duration : 400 } , animateStarSmaller );
})();

function addEventListeners() {
    
}


/*
 * Main functions
 * 
 * closeEndorseView
 * animateStarSmaller
 */

function closeEndorseView() {
    //TODO: add sound byte when star has hit
    $.containerView.animate({ opacity : 0 , duration : 400 } , args.closeEndorseView );
}

function animateStarSmaller() {
    $.endorseImageView.animate({ height : 100 , width : 100 , duration : 500 } , closeEndorseView );   
}