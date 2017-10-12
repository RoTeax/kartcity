
/******************/
/* Hamburger Menu */
/******************/

$(document).read(function(){
	$(window).on( "orientationchange", function(event){
		if ($(document).width() >= 641){
			$("nav").show();
		}
	});
	
	$(".cross").hide();
	$(".hamburger").click(function(){
		$("nav").slideToggle( "slow", function(){
			$(".hamburger").hide();
			$(".cross").show();
		});
	});

	$(".cross").click(function(){
		$("nav").slideToggle( "slow", function(){
			$(".cross").hide();
			$(".hamburger").show();
		});
	});
});