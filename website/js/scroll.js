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
        } else {
            $('.scroll-to-top').removeClass('show');
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
