$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('.main-nav').attr("uk-sticky", "bottom: #offset");
  } else {
    $('.main-nav').removeAttr("uk-sticky", "bottom: #offset");
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 48) {
    $('.main-nav').addClass('shrink-nav uk-animation-slide-top');
  } else {
    $('.main-nav').removeClass('shrink-nav uk-animation-slide-top');
  }
});
