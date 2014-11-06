var args = arguments[0] || {};



(function init() {
    $.containerView.animate({ opacity : 1 , duration : 500 } , animateStarSmaller );
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
    $.containerView.animate({ opacity : 0 , duration : 500 } , args.closeEndorseView );
}

function animateStarSmaller() {
    $.endorseImageView.animate({ height : 110 , width : 100 , duration : 400 } , function() {
        setTimeout( closeEndorseView , 600) ;
    });   
}