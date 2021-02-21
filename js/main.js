// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
}

document.addEventListener( 'DOMContentLoaded', function () {

    // Splidejs - Hero Banner

    new Splide( '.splide', {
        type   : 'loop',
        autoplay : 'true'
    } ).mount();

    // Splidejs - New Releases Product

    new Splide( '#card-slider', {
      perPage    : 4,
      gap : 25,
      breakpoints: {
        1000: {
          perPage:  2,
        },
        500: {
          perPage:  1,
        }
      }
    } ).mount();

    // Splidejs - Hot Product

    new Splide( '#card-hot-slider', {
      perPage    : 3,
      gap : 50,
      breakpoints: {
        1000: {
          perPage:  2,
        },
        500: {
          perPage:  1,
        }
      }
    } ).mount();

    new Splide( '#card-partner-slider', {
      perPage    : 1,
    } ).mount();

});

// JQuery

jQuery(document).ready(function($) {

  // Video Presentation

  $('#index-video').parent().click(function () {
    if($(this).children("#index-video").get(0).paused){
        $(this).children("#index-video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children("#index-video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
  });

});
