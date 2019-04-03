// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
if(!isMobile) window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 240) {
    console.log('scrolled');
    $("nav.custom-navbar .logo")[0].style.height = '60px';
    $("nav.custom-navbar .logo")[0].src = 'assets/logo_blue_mini.png';
  } else {
    console.log('top');
    $("nav.custom-navbar .logo")[0].style.height = 300 - document.body.scrollTop + 'px';
    $("nav.custom-navbar .logo")[0].src = 'assets/logo_blue.png';
  }
}