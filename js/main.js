// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add("-show");
  } else {
    document.getElementById("navbar").classList.remove("-show");
  }
}

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
    $('.home').removeClass('mm-ocd-opened');
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

  // Acccordion

  $('.acc__title').click(function(j) {
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
  
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
  
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  // Mmenu Library

  let mmenu = new MmenuLight(
    document.querySelector( '#menu-mb' ),
    'all'
  );

  let navigator = mmenu.navigation({
    selectedClass: 'Selected',
    theme: 'dark',
    title: ''
  });

  let drawer = mmenu.offcanvas({
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

  $('.mm-spn--open span').click(function () {
    $('#menu-mb').removeClass('mm--main');
  });

  let menu_mb = document.getElementById('menu-mb');

  let observer = new MutationObserver(function(mutations) {
    if($(menu_mb).attr('data-mm-spn-title') == ""){
      $('#menu-mb').addClass('mm--main');
    }
  });

  observer.observe(menu_mb, { 
  attributes: true, 
  attributeFilter: ['data-mm-spn-title'] });

  // Attribute Single Product : Size Type

  $('.size-type-block .size-type').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('.size-type-block .size-type').removeClass('current');
		$('.size-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  // Tab Desciption Single Product

  $('.description-block .desc-type').click(function(){
		let tab_dsec_id = $(this).attr('data-tab');

		$('.description-block .desc-type').removeClass('current');
		$('.desc-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_dsec_id).addClass('current');
	});

  // Product Categories Boots Page - Show/Hide Filter

  $('.filter-btn-block .filter-btn').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').toggleClass('show');
    $('.product-section .-side-right').toggleClass('show');
	});

  // Product Categories Boots Page - Show/Hide Filter Mobile

  $('.filter-btn-block-mb .filter-btn').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').addClass('mb-show');
    $('.product-section .-side-right').addClass('mb-show');
	});

  $('.grid-item.-side-left.show .close-btn-mb').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').removeClass('mb-show');
    $('.product-section .-side-right').removeClass('mb-show');
	});

  $('.product-section .-side-right .overlay-mb').click(function(e){
    e.preventDefault();
		
    $('.product-section .-side-left').removeClass('mb-show');
    $('.product-section .-side-right').removeClass('mb-show');
	});

  // Menu Toggle

  $('.menu-tg .tg__title').click(function(j) {
    let tg = $(this).closest('.tg__card').find('.tg__panel');
  
    if ($(this).hasClass('toggle')) {
      $(this).removeClass('toggle');
    } else {
      $(this).addClass('toggle');
    }
  
    tg.stop(false, true).slideToggle();
    j.preventDefault();
  });

  $('.product-detail-boots-page .btn-360').click(function(j) {
    $('#view-360').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('#view-360 .close-btn').click(function(j) {
    $('#view-360').removeClass('show');

    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-boots-page .personalization-btn').click(function(j) {
    $('.popup-personalize').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('.popup-personalize .close-btn').click(function(j) {
    $('.popup-personalize').removeClass('show');
    
    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-jersey-page .popup-personalize .close-btn').click(function(j) {
    $('.popup-personalize').removeClass('show');
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();

    $('html, body').removeClass('popup-360');
  });

  $('.product-detail-jersey-page .personalization-btn').click(function(j) {
    $('.popup-personalize').addClass('show');

    $('html, body').addClass('popup-360');
  });

  $('#next-step-01').click(function(){
    $('#step-01').fadeOut();
    $('#step-02').fadeIn();
  });

  $('.back-btn').click(function(){
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();
  });

  $('input[name="radio-group"]').click(function(){
      if($(this).attr("value")=="screen-soccers"){
        $(".screen-num").fadeOut('slow');
        $(".screen-box").fadeIn('slow');
      } else if ($(this).attr("value")=="screen-num"){
        $(".screen-box").fadeOut('slow');
        $(".screen-num").fadeIn('slow');
      } else{
        $(".screen-box").fadeOut('slow');
        $(".screen-num").fadeOut('slow');
      }
  });

  $('input[name="radio-way"]').click(function(){
      if($(this).attr("value")=="step-number"){
        $("#step-number").fadeIn('slow');
        $("#step-01").fadeOut('slow');
      } else {
        $("#step-logo").fadeIn('slow');
        $("#step-01").fadeOut('slow');
      }
  });

  $('.-submit').click(function(){
    $('#step-01').fadeIn();
    $('#step-number').fadeOut();
    $('#step-logo').fadeOut();
  });

  // $('#submit-step').click(function(){
  //   let way = $('input[name="radio-way"]:checked').val();

  //     if(way == "step-number"){
  //       $("#step-number").fadeIn('slow');
  //       $("#step-01").fadeOut('slow');
  //     } else {
  //       $("#step-logo").fadeIn('slow');
  //       $("#step-01").fadeOut('slow');
  //     }
  // });

});