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
$('.your-love-drink > .slick').slick({
	infinite: true,
	slidesToScroll: 1,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 2500,
	pauseOnHover: true,
	centerMode: true,
	slidesToShow: 5,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2
			}
		}
	]
});
