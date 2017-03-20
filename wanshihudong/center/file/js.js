$(function(){
	$('.wx').hover(function(){
		$('.ewm').stop(true,false).fadeIn();
	},function(){
		$('.ewm').stop(true,false).fadeOut();
	})
})