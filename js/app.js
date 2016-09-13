
var main = function() {
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
};

window.onscroll = function() {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    var opacity = Math.min(scrollTop/440, 1);
    console.log(opacity);
    $(".section-foreground-overlay").css('background-color', 'rgba(30,30,30,'+opacity+')')
    if(scrollTop > 440) {
        $("nav").css('background-color', 'rgba(30,30,30,1)')
    } else {
        $("nav").css('background-color', 'rgba(30,30,30,0)')
    }
}

$(document).ready(main);
