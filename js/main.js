$(document).ready(function () {
    
    $(".smooth-scroll a").bind('click', function(event){
        var $anchor = $(this);
        var headerH = '80';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-headerH+"px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });



    $(".features_list").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        pagination : true,
        
    });

    $(".vira_work_list").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        pagination:true,
        
    });
    
   $('body').scrollspy({ target: '#dipu' });
   
   $("#sticker").sticky();
   

});