document.addEventListener("touchstart", function(){}, true);

$('.menu-button').click(function(){
	$(this).toggleClass('active');
	$('.full-nav').toggleClass('active');
	$('body').toggleClass('overflow-hidden');
	$("html, body").animate({
	    scrollTop: 0
	}, 600);
	return false;
});