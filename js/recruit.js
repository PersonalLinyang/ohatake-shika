$(document).ready(function(){
	function change_select(obj) {
		var active_now = $('.info-option.active');
		active_now.removeClass('active');
		active_now.addClass('hidden');
		active_now.appendTo('.info-option-list');
		obj.addClass('active');
		obj.removeClass('hidden');
		obj.appendTo('.info-select');
		obj.unbind();
		var to_id = obj.data('id');
		$('.info-content').removeClass('active');
		$('#' + to_id).addClass('active');
		active_now.unbind().click(function(){
			change_select($(this));
		});
	}
	
	$('.info-select').click(function(){
		if($('.info-select').hasClass('active')) {
			$('.info-select').removeClass('active');
			$('.info-option-list').slideUp();
		} else {
			$('.info-select').addClass('active');
			$('.info-option-list').slideDown();
		}
	});
	
	$('.info-button').click(function(){
		var to_id = $(this).data('id');
		$("html,body").animate({scrollTop:$('#' + to_id).offset().top - 100});
	});
	
	$('.info-option.hidden').click(function(){
		change_select($(this));
	});
	
	$('.form-input-radio-label').click(function(){
		$('.form-input-radio-label').removeClass('active');
		$(this).addClass('active');
	});
});