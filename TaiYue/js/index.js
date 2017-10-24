var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay:3000,
    });
    
$('.dropdown-toggle').dropdown();

new WOW().init();

$(function() { 
    $(".flexslider").flexslider({
    	animation:"slide",
    	animationLoop:true,
    	slideshow:true,
    	animationSpeed:1000,
    	directionNav:false,
    	pauseOnHover: true
    });
}); 
