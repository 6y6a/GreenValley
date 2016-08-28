$(document).ready(function() {
  var $window = $(window);
  var $body = $('body');
  var $container = $('#review-slider');

  initCarousel();

  $window.resize(function() {
    initCarousel();
  });

  function initCarousel(){
    $body.css('overflow', 'hidden');
    if ($window.width() >= 992) {
      $container.owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        margin: 20,
        smartSpeed: 200,
        fluidSpeed: 200,
        navSpeed: 0,
        slideBy: 2
      });
    }
    else {
      $container.trigger('destroy.owl.carousel');

      //$container.find('.review-slider__item').eq(1).addClass('review-slider__item--active');
    }

    if ($window.width() < 768) {
      //$container.find('.review-slider__item').eq(1).removeClass('review-slider__item--active');
    }

    $body.css('overflow', 'auto');
  }
});