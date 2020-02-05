$(function() {
  var stiky = $(".stiky");
  /* navbar */
  $(window).scroll(function() {
    var window = $(this).scrollTop();
    var header = $(".header");
    if (window > 60) {
      stiky.css("display", "block");
      header.addClass("fixed");
    } else {
      stiky.css("display", "none");
      header.removeClass("fixed");
    }
  });
});
