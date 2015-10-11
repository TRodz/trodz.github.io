$(document).ready(function () {

	$("a.isGoingDownType").click(function () {
		$("#butDropDownType").dropdown("toggle");
	});
	$("a.isGoingDownReg").click(function () {
		$("#butDropDownReg").dropdown("toggle");
	});

	var $container = $('.portfolioContainer').isotope({
		resizable: true,
		masonry: {
			columnWidth: 0
		},
		itemSelector: '.container-item',
		layoutMode: 'fitRows',
		getSortData: {
			name: '.name',
			year: '.year'
		}
	});

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
	});

}); // window onload