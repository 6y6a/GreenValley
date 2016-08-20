$(document).ready(function(){
  var $photo = $('#gallery__photo');
  var $preview = $('#gallery__preview');

  $photo.owlCarousel({
    items : 1,
    startPosition: 3,
    smartSpeed: 400
  });

  $preview.owlCarousel({
    items : 6,
    startPosition: 3,
    smartSpeed: 400,
    center: true
  });

  // Добавляем индексы каждому элементу
  $preview.find('.owl-item').each(function (i) {
    $(this).data("item", i);
  });

  // Cобытие при переключении превью
  $preview.find('.owl-item').on('click', function () {
    var $position = $(this).data('item');
    $preview.trigger('to.owl.carousel', $position);
  });

  // Событие при свайпе превью
  $preview.on('changed.owl.carousel', function(event){
    $photo.trigger('to.owl.carousel', event.item.index);
  });

  // Событие при свайпе фото
  $photo.on('changed.owl.carousel', function(event){
    $preview.trigger('to.owl.carousel', event.item.index);
  });
});