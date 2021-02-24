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
    $(menu).addClass('active');
  });

  $(".close-btn").click(function() {
    $(menu).removeClass('active');
  });

  // burger menu

  let menu_burger_sidebar = $(".menu-burger-sidebar");

  $(".menu-burger").click(function() {
    $(menu_burger_sidebar).addClass('active');
  });

  $(".close-btn").click(function() {
    $(menu_burger_sidebar).removeClass('active');
    $('.mm-ocd').removeClass('mm-ocd--open');
  });

  $(".title-nav").click(function() {
    $('.mm-spn.mm-spn--navbar').addClass('mm-main');
    $('.mm-spn--open').removeClass('mm-spn--parent');
    $('.main-menu-mb ul').removeClass('mm-spn--open');
    
  });

  $(".mm-spn span").click(function() {
    $('.mm-spn.mm-spn--navbar').removeClass('mm-main');
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

var menu = new MmenuLight(
  document.querySelector( '#menu-mb' ),
  'all'
);

var navigator = menu.navigation({
  selectedClass: 'Selected',
  slidingSubmenus: true,
  theme: 'dark',
  title: ''
});

var drawer = menu.offcanvas({
  position: 'right'
});

//	Open the menu.
let el = document.querySelector( 'a[href="#menu-mb"]' );

if(el){
  el.addEventListener( 'click', evnt => {
    evnt.preventDefault();
    drawer.open();
  });
}