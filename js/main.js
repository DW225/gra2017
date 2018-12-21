window.initMap= function() {
        var school = {lat: 25.0299815, lng: 121.5126372};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center:school,
        // Disables the default Google Maps UI components
        // disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,
        
        styles: [{"featureType":"road","stylers":[{"hue":"#5e00ff"},{"saturation":-79}]},{"featureType":"poi","stylers":[{"saturation":-78},{"hue":"#6600ff"},{"lightness":-47},{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"lightness":22}]},{"featureType":"landscape","stylers":[{"hue":"#6600ff"},{"saturation":-11}]},{},{},{"featureType":"water","stylers":[{"saturation":-65},{"hue":"#1900ff"},{"lightness":8}]},{"featureType":"road.local","stylers":[{"weight":1.3},{"lightness":30}]},{"featureType":"transit","stylers":[{"visibility":"simplified"},{"hue":"#5e00ff"},{"saturation":-16}]},{"featureType":"transit.line","stylers":[{"saturation":-72}]},{}]
            
        });
        var marker = new google.maps.Marker({
          position: school,
          map: map
        });
};

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$("input#answer").click(function(){
    $(this).siblings("div").toggleClass("choosen");
});

function hideaside() {
    var a = $(".detect").offset();
    if(a.top<window.innerHeight){
        $(".naver").removeClass("rela");
    }
    else {
        $(".naver").addClass("rela");}
}

$(".selection").click(function(){
    var t = $(".selection").index(this);
    $('.carousel').carousel(t);
});

$(window).scroll(hideaside);
$(document).ready(hideaside);