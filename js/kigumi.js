jQuery(function($) {

  $('#home_details').bgSwitcher({
    images: ['images/sagyou01.jpg','images/sagyou02.jpg','images/kansei.jpg'],
  　interval: 5000,
  　loop: true,
  　effect: "fade", // fade,blind,clip,slide,drop,hide
  　duration: 500,
  　easing: "swing" // linear,swing
  });

  $('#home_details_heading').on('inview', function(){
    setTimeout(function() {
      $('#home_details_heading').addClass('appear');
      $('.home_details_txt').addClass('appear');
    }, 250)
  });

  $('#program_heading').on('inview', function() {
    setTimeout(function() {
      $('#program_heading').addClass('appear');
      $('.box').addClass('appear');
    }, 250);
  });

});
