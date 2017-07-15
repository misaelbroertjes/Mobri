$( document ).ready(function() {
	$(".projectMeer").click(function(){
		$(this).siblings( ".projectMinder" ).show();
		$(this).hide();
		$(this).siblings( ".projectExtra" ).slideToggle( "slow", function() {
			// Animation complete.
		});
	});
	
	$(".projectMinder").click(function(){
		$(this).siblings( ".projectMeer" ).show();
		$(this).hide();
		$(this).siblings( ".projectExtra" ).slideToggle( "slow", function() {
			// Animation complete.
		});
	});
});