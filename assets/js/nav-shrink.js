
$(window).scroll(function() {
  if ($(document).scrollTop() > 48) {
    $('.main-nav').addClass('shrink-nav uk-animation-slide-top');
  } else {
    $('.main-nav').removeClass('shrink-nav uk-animation-slide-top');
  }
});
