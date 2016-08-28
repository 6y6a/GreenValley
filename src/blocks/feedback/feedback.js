$(document).ready(function () {
  var $window = $(window);
  var $body = $('body');
  var $container = $('#feedback');
  var $owl = $('#review-slider');
  var $slides = $owl.find('.review-slider__item');
  var $leftOwl = $container.find('.feedback__left');
  var $rightOwl = $container.find('.feedback__right');
  var $btn = $container.find('.btn');
  var openClick = 0;

  $body.css('overflow', 'hidden');
  if ($window.width() >= 768){
    $slides.eq(1).addClass('review-slider__item--active');
  }
  $body.css('overflow', 'auto');


  $btn.on('click', function (event) {
    event.preventDefault();

    $body.css('overflow', 'hidden');
    if ($window.width() >=992) {
      return;
    }
    else if ($window.width() >= 768) {
      if (openClick === 0) {
        reviewSlideToggle(2, true);
      }
      else {
        reviewSlideToggle(2, false);
      }
    }
    else if ($window.width() >= 0) {
      if (openClick === 0) {
        reviewSlideToggle(1, true);
      }
      else {
        reviewSlideToggle(1, false);
      }
    }
    $body.css('overflow', 'auto');

    openClick = (openClick === 0) ? 1 : 0;
  });

  $window.resize(function() {
    $body.css('overflow', 'hidden');

    if (openClick === 0) {
      $slides.removeAttr('style');
    }
    if ($window.width() >= 768){
      $slides.eq(1).addClass('review-slider__item--active');

    }
    else {
      if (openClick === 0) {
        $slides.eq(1).removeClass('review-slider__item--active');
      }
    }
    $body.css('overflow', 'auto');
  });


  // Убрать или показать (n - num) отзывов с конца
  function reviewSlideToggle(num, show) {
    if (show === true) {
      $slides.not(':lt(' + num + ')').slideDown().addClass('review-slider__item--active');
      $btn.text('Свернуть');
    }
    else {
      $slides.not(':lt(' + num + ')').slideUp().removeClass('review-slider__item--active');
      $btn.text('Все отзывы');
    }
  }

  $leftOwl.on('click', function (event) {
    event.preventDefault();
    $owl.trigger('prev.owl.carousel');

  });

  $rightOwl.on('click', function (event) {
    event.preventDefault();
    $owl.trigger('next.owl.carousel');

  });

});