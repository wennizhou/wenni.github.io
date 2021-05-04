$(function() {
  			  $(window).scroll(function() {
   				 if( $(this).scrollTop() > 100) {
     			 $('body').addClass('changeColor');
   				 } else {
      			 $('body').removeClass('changeColor');
   				 }
 			  })
			})




