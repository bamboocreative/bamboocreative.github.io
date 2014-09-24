document.addEventListener("touchstart", function(){}, true);

$('.menu-button').click(function(){
	$(this).toggleClass('active');
	$('.full-nav').toggleClass('active');
});
