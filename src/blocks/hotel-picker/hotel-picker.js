$(document).ready(function(){
  var $window = $(window);
  var $body = $('body');
  var $container = $('#hotel-picker');
  var $tabs = $container.find('input[type=radio]');
  var $toggles = $('#hotel-description').find('.hotel-description');
  var position;

  showActive();

  $tabs.on('click', function(){
    showActive();
  });

  $window.on('resize', function () {
    showActive()
  });

  function showActive() {

    $body.css('hidden','overflow');

    $toggles.hide();
    position = $tabs.filter(':checked').parent().data('tabs');

    if ($window.width() >= 768) {
      $toggles.eq(position - 1).fadeIn();
    }

    $tabs.parent().removeClass('hotel-picker--active').eq(position - 1).addClass('hotel-picker--active');

    $body.css('hidden','auto');
  }
});
