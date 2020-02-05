$(function() {
  var a_link = $(".list-item .item a");
  var box = $(".box-container .box");

  a_link.click(function(e) {
    e.preventDefault();
    /* ul active class */
    a_link.removeClass("active");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    /* show item click show the main box */
    box.hide();
    $($(this).data("content")).fadeIn(600);

    if ($(this).data("content") === "all") {
      box.fadeIn();
    }
  });

  /* Flibing the cards */
  $(".card").flip({
    axis: "y",
    trigger: "click"
  });
});
