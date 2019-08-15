$(document).ready(function() {
    $('.navbar-default a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if (target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 120
            }, 1500);
        }
    });
});

$(function(){

    $(document).on( 'scroll', function(){

        if ($(window).scrollTop() > 100) {
            $('.scroll-to-top').addClass('show');

            $(".navbar-default").css("background-color" , "#02005c");
            // $(".navbar-default").css("background" , "linear-gradient(56.87deg, #02005c 0%, #651372 99.97%)");
        } else {
            $('.scroll-to-top').removeClass('show');
            $(".navbar-default").css("background" , "none");
        }
    });

    $('.scroll-to-top').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
