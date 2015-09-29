

$( document ).ready(function(){
		
	document.addEventListener("touchstart", function(){}, true);
	
	if($('body.page-home').length){
		 var height =  $(window).height();	
		 var height =  $(window).height();
		 $('.section-hero').css({'height': height + 'px'});	 
	}
	
	$(window).resize( function(){
		var height =  $(window).height();
		$('.section-hero').css({'height': height + 'px'});
	});
	
	if($('#header-mark').length){
		var mark = $('#header-mark').offset().top;
		var top = $(window).scrollTop();
		
		if(top > mark) {
			setTimeout(function(){
				$('.fixed-header').addClass('show-header');
			}, 200)
		}
	}
	
	
	
	
	$(document).scroll(function(){
		if($('#header-mark').length){
			mark = $('#header-mark').offset().top;
			top = $(window).scrollTop();

			if(top > mark) {
				$('.fixed-header').addClass('show-header');
			}
			if(top < mark) {
				$('.fixed-header').removeClass('show-header');
			}
		}
	})
		
	
	
	$('.trigger-menu').click(function(event){
		event.preventDefault();
		$('.mobile-nav').toggleClass('show-mobile-nav');
		$('body').toggleClass('overflow-hidden');
		if(top > mark) {
			$('.fixed-header').toggleClass('show-header');
		}
	});
	
	if($('.feature-team').length){
				
		window.setInterval(function(){
			
			var randomPerson = Math.floor(Math.random() * 9) + 1;
			var randomSelection = Math.floor(Math.random() * 4) + 1;
			if($(window).width() < 768){
				randomSelection = Math.floor(Math.random() * 3) + 1;
			} 
			var append = randomSelection;
			
			var randomFeat = $('.feature-team .team-member:nth-child(' + randomSelection +')');
			var randomAll = $('.all-team .team-member:nth-child(' + randomPerson +')');
			var match = false;
			
			$('.feature-team .team-member').each(function(){
				if( $(this).attr('data-name') === randomAll.attr('data-name')){
					match = true;
					return false;
				}
			})
			
			if(match){
				return false;
			}
			
			randomFeat.addClass('byebye');
			
			setTimeout(function(){
				randomAll.clone().insertAfter('.feature-team .team-member:nth-child(' + randomSelection + ')');
				randomFeat.remove();
			}, 400);
			
			
			
		}, 2000);
				
	}
	
	$('.trigger-submit-form').click(function(event){
		
		event.preventDefault()
		
		var button = $(event.currentTarget);
				
		button.text('Sending...');
		
		var error = false;
		
		var HTMLMessage = '<h1>Boom! Get to work Dave. You have an incoming project.</h1>';
		
		$('.form-input').each(function(){
						
			var input = $(this);
			
			if(input.attr('required') && !input.val()){
				
				input.addClass('shake');
				
				button.text('Try Again.');
				
				setTimeout(function(){
					button.text('SEND IT!');
				}, 2000)
				
				error = true;
				
				return false;
				
			} else {
				
				HTMLMessage += '<p><strong>' + input.attr("name") + ':</strong> ' + input.val() + '</p>';
			
			}
		});
		
		if(error){
			return false;
		}
		
		var urlBase = 'https://mandrillapp.com/api/1.0/messages/send.json';
				
		var messageObject = {
		"key": 'vjo8DwJK5IArQHRAVpyjCA',
		"message": {
			"html": HTMLMessage,
			"text": "",
			"subject": "Let's Work Together",
			"from_email": $('#email').val(),
			"from_name": $('#name').val(),
			"to": [{
				"email": "dave@bamboocreative.com",
				"name": "Dave Cox",
				"type": "to"
			}],
			}
		};
		
		$.ajax({
			
			type: "POST",
			url: urlBase,
			data: messageObject,
		
		}).done(function(response){
		
			if(response.status === 'error'){
				button.text('Try Again');
				setTimeout(function(){
					button.text('SEND IT!');
				}, 2000)
			} else {
				button.text('Success!');
				showMessage('Phenomenal! Look forward to working with you soon.', 5000);
				document.body.scrollTop = document.documentElement.scrollTop = 0;
				setTimeout(function(){
					button.text('SEND IT!');
					$('.form-input').each(function(){
						var input = $(this);
						input.val('');
					});
				}, 5000)
			}
		
		});		
	});
		
	
	$('.message').click(function(event){
		$('body').removeClass('show-message');
		$('.message .message-text').empty();
	})
	
	var showMessage = function(message, hideIn){
		$('.message .message-text').append(message);
		$('body').addClass('show-message');
		if(hideIn){
			setTimeout(function(){
				$('body').removeClass('show-message');
				$('.message .message-text').empty();
			}, hideIn)
		}
	}
		
});