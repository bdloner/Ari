// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("-show");
  } else {
    document.getElementById("navbar").classList.remove("-show");
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
          fixedWidth: '16rem',
          gap : 15,
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
          fixedWidth: '17rem',
          gap : 15,
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

  // Hover Megamenu

  $( ".top-menu" ).hover(
    function() {
      $( '.active' ).removeClass('active');
      $( this ).addClass('active');
      $( this ).find('.mega-menu-content').addClass('active');
    }, function() {
      $( this ).removeClass('active');
      $( this ).find('.mega-menu-content').removeClass('active');
      $( '.main' ).addClass('active');
    }
  );

  // Mini Cart Sidebar

  let menu = $("#mini-cart-sidebar");

  $(".-minic").click(function() {
      $(menu).show().animate({right: 0}, 500); 
  });

  $(".close-btn").click(function() {
    if ($(menu).is(":visible")) {
        $(menu).animate({right: -450}, 500, function() {$(menu).hide();});
    } 
  });

  // burger menu

  let menu_burger_sidebar = $(".menu-burger-sidebar");

  $(".menu-burger").click(function() {
      $(this).toggleClass('active');
      $(menu_burger_sidebar).toggleClass('active');
  });

  // Input Counter

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

});
