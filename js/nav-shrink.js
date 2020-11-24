$(window).scroll(function() {
  if ($(document).scrollTop() > 32) {
    $('.main-nav').addClass('shrink-nav');
  } else {
    $('.main-nav').removeClass('shrink-nav');
  }
});
