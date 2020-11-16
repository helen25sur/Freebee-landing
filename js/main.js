const menuBtn = document.querySelector('.fas');
const openMenuBtn = document.querySelector('.fa-bars');
const closeMenuBtn = document.querySelector('.fa-times');
const menu = document.querySelector('.main-navigation');
const allDoc = document.querySelector('.content');

menuBtn.addEventListener('click', function () {
	menu.classList.toggle("active");
	menuBtn.classList.toggle("fa-times");
});


allDoc.addEventListener('click', function () {
	menu.classList.remove("active");
	menuBtn.classList.remove("fa-times");
});


$(function () {
	$('.services-list').slick({
		prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="assets/img/svg/prev.svg" alt=""></button>',
		nextArrow: '<button class="slick-next slick-btn" type="button" style=""><img src="assets/img/svg/next.svg" alt=""></button>',
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 4,
		responsive: [
			{
					breakpoint: 1024,
					settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: false
					}
			},
			{
					breakpoint: 600,
					settings: {
							slidesToShow: 2,
							slidesToScroll: 2
					}
			},
			{
					breakpoint: 480,
					settings: {
							slidesToShow: 1,
							slidesToScroll: 1
					}
			}
		],
		lazyLoad: 'ondemand'
	});
});
