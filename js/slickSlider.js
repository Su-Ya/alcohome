/**********************************************************
	slick slider
**********************************************************/
$('.any-place > .slick').slick({
	infinite: true,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnHover: true,
	centerMode: true,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
