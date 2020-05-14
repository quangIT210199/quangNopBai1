// Preloader by me
$(window).on('load', function() {
    if ($('.preloader').length) {
      $('.preloader').delay(1000).fadeOut('slow', function() {
        $(this).remove();
      });
    }
});

// Back to top button
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},500);
    });
});