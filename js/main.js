document.addEventListener("touchstart", function(){}, true);

$('.trigger-menu').click(function(e){
	console.log('do it')
	e.preventDefault()
	$('.site-nav').toggleClass('show-mobile-nav');
	$('body').toggleClass('overflow-hidden');

	return false;
});