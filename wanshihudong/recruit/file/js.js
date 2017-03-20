$(function(){
	$('.wx').hover(function(){
		$('.ewm').stop(true,false).fadeIn();
	},function(){
		$('.ewm').stop(true,false).fadeOut();
	})
	$('.ej_join_a a').each(function(){
		$(this).css('border-color',$(this).attr('data-color'));
		$(this).hover(function(){
			$(this).css('background-color',$(this).attr('data-color'));
		},function(){
			$(this).css('background','none');
		})
	})
})