// Work Search Button
jQuery(document).ready(function ($) {
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });
});

/* Navigation burger onclick side navigation show */
$(document).ready(function () {
  $('.burger-container').on('click', function () {
    $('.main-navigation').toggle('slow');

    if ($('#myBtn').hasClass('change')) {
      $('body').addClass('stop-scroll');
    } else {
      $('body').removeClass('stop-scroll');
    }
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}