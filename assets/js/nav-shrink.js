$(window).scroll(function() {
  if ($(document).scrollTop() > 10) {
    $('#desk-nav').attr("uk-sticky", "bottom: #offset");
  } else {
    $('#desk-nav').removeAttr("uk-sticky", "bottom: #offset");
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 48) {
    $('#desk-nav').addClass('shrink-nav uk-animation-slide-top');
  } else {
    $('#desk-nav').removeClass('shrink-nav uk-animation-slide-top');
  }
});
