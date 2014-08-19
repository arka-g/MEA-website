angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'TeamCtrl', 'TeamService', 'AboutCtrl', 'AboutService', 'EventsCtrl', 'EventsService']);

//call function
$(function() {
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});

//cool side menu effect
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }
    //$('#site-wrapper').toggleClass('show-nav');
}

//escape with 'esc'
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($('#site-wrapper').hasClass('show-nav')) {
            toggleNav();
        }
    } 
});

//closing menu every time you click
$('.navig').on(
    'click', function(){
        $('#site-wrapper').toggleClass('show-nav');
});



