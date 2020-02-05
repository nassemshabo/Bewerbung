$(function() {
  var slider = $(".slider");
  var menu = $(".menu");
  var close = $(".close");

  /* slider menu */
  menu.click(function() {
    slider.animate(
      {
        right: 0
      },
      400
    );
  });

  close.click(function() {
    slider.animate(
      {
        right: -500
      },
      400
    );
  });
});
