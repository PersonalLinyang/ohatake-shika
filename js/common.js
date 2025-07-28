$(document).ready(function(){
	$(window).scroll(function() {
		var width_window = $(window)[0].innerWidth;
		if(width_window > 1024) {
			var scroll_top = $(this).scrollTop();
			if (scroll_top > 100) {
				$('.header-area').removeClass('header-normal');
				$('.header-area').addClass('header-scroll');
				$('.header-area').css('top', 0);
				$('.header-hide-area').css('top', 100);
			} else {
				$('.header-area').addClass('header-normal');
				$('.header-area').removeClass('header-scroll');
				$('.header-area').css('top', -scroll_top);
				$('.header-hide-area').css('top', 200 - scroll_top);
			}
		}
	});
	
	$('.header-button-sp').click(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header-nav-sp').slideUp();
		} else {
			$(this).addClass('active');
			$('.header-nav-sp').slideDown();
		}
	});
	
	$('.header-nav-item-sp').click(function(){
		var nav_name = $(this).data('nav');
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.header-nav-sub-list-' + nav_name).slideUp();
		} else {
			$(this).addClass('active');
			$('.header-nav-sub-list-' + nav_name).slideDown();
		}
	});
	
	$('.footer-to-top').click(function(){
		$("html,body").animate({scrollTop:"0px"},200);
	});
});