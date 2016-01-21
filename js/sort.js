 $(document).ready(function () {

	$("a.isGoingDownType").click(function () {
		$("#butDropDownType").dropdown("toggle");
	});
	$("a.isGoingDownReg").click(function () {
		$("#butDropDownReg").dropdown("toggle");
	});

	var $container = $('.portfolioContainer').isotope({
		itemSelector: '.container-item',
		percentPosition: true,
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 0
		},
		getSortData: {
			name: '.name',
			year: '.year'
		}
	});
	 
	var click = 0;

	$('.portfolioFilter a').click(function () {
		$('.portfolioFilter .current').removeClass('current');
		$(this).addClass('current');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});
	});

	$('.portfolioSort a').click(function () {
		var selector = $(this).attr('data-sort-by');
		$container.isotope({
			sortBy: selector
		});
		if (click % 2 === 0) {
			$container.isotope({ sortAscending: true });
		}
		else {
			$container.isotope({ sortAscending: false });
		}
		click++;
	});

	// Load isotope after every image has been loaded
	$container.imagesLoaded().progress( function() {
		$container.isotope('layout');
	});

}); // window onload