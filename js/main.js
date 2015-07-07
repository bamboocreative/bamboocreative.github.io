

$( document ).ready(function(){
		
	document.addEventListener("touchstart", function(){}, true);
	
	
	$('.trigger-menu').click(function(e){
		console.log('do it')
		e.preventDefault()
		$('.site-nav').toggleClass('show-mobile-nav');
		$('body').toggleClass('overflow-hidden');
	
		return false;
	});
	
	if($('.feature-team').length && $(window).width() > 768){
				
		window.setInterval(function(){
			
			var randomPerson = Math.floor(Math.random() * 10) + 1;
			var randomSelection = Math.floor(Math.random() * 4) + 1;
			var append = randomSelection;
			
			$('.feature-team .team-member:nth-child(' + randomSelection +')').addClass('byebye');
			setTimeout(function(){
				$('.all-team .team-member:nth-child(' + randomPerson +')').clone().insertAfter('.feature-team .team-member:nth-child(' + randomSelection + ')');
				$('.feature-team .team-member:nth-child(' + randomSelection +')').remove();
			}, 400);
			
			
			
		}, 2000);
				
	}
	
});