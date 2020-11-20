$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.main-nav').addClass('shrink-nav');
  } else {
    $('.main-nav').removeClass('shrink-nav');
  }
});
