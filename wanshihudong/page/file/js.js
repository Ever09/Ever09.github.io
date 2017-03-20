$(function(){
	// 二维码
	$('.wx').hover(function(){
		$('.ewm').stop(true,false).fadeIn();
},function(){
		$('.ewm').stop(true,false).fadeOut();
})
	//产品中心
	$('.m_ul1 li').hover(function(){
		$(this).find('span.abs').stop(true,false).slideDown(300);
		$(this).find('img').stop(true,false).animate({'top':'0px'},300);
	},function(){
		$(this).find('span.abs').stop(true,false).slideUp(300);
		$(this).find('img').stop(true,false).animate({'top':'-15px'},300);
	})
	$('.row').hover(function(){
		$(this).find('.fl').css({'background': '#350a63','opacity': '0.9'});
		$(this).find('.abt').css({'color': '#350a63'});
	},function(){
		$(this).find('.fl').css({'background': '#696969'});
		$(this).find('.abt').css({'color': '#696969'});
	})




})



