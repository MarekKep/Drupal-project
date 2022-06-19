(function ($, Drupal, once) {

  Drupal.behaviors.indexBehavior = {
    attach: function (context, settings) {
      //code.
    }
  };

  
  Drupal.behaviors.burgerMenuBehavior = {
    attach: function (context, settings) {
      $('.burger-menu', context).on('click', function () {
        $(this).toggleClass('burger-menu_active');
        $('.region-header').toggleClass('region-header_active');
      })
    }
  };

  Drupal.behaviors.burgerFilterBehavior = {
    attach: function (context, settings) {
      $('.burger-filter', context).on('click', function () {
        $(this).toggleClass('burger-filter_active');
        $('.region-left-sitebar').toggleClass('region-left-sitebar_active');
      })
    }
  };

})(jQuery, Drupal, once);
