$(document).ready(function () {
  $owl = $('#room-slider');
  $left = $owl.parent().find('.room-slider__left');
  $right = $owl.parent().find('.room-slider__right');


  $owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false
  });

  $left.on('click', function(){
    $owl.trigger('prev.owl.carousel');
  });

  $right.on('click', function(){
    $owl.trigger('next.owl.carousel');
  });

});