$(document).ready(function(){
  var $container = $('#promo');
  var $tabs = $container.find('[data-tab=tabs]');
  var $tab = $tabs.children();
  var $toggles = $container.find('[data-toggle=toggler]');
  var $toggle = $toggles.children();
  var position;

  showActive();

  $tab.on('click', function(event){
    event.preventDefault();
    $tab.removeClass('promo__tab--active')
        .children().removeClass('promo__link--active');

    $(this).addClass('promo__tab--active')
           .children().addClass('promo__link--active');

    showActive();
  });


  function showActive() {
    $toggle.hide();
    position = $tab.has('[class$=--active]').data('tab');
    console.log(position);
    $toggle.filter('[data-toggle=' + position + ']').fadeIn();
  }


});