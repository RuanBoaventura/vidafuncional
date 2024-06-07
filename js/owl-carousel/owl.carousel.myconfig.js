$(document).ready(function() {
	
	$(".wrapper .container .index #testimonials-wrapper #testimonials ul.votes").owlCarousel({
		autoPlay : 5000,
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
	
});