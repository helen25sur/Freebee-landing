const menuBtn = document.querySelector('.mobile-menu');
const menu = document.querySelector('.main-navigation');

menuBtn.addEventListener('click', function () {
	// console.log('клик')
	menu.classList.toggle("active");
});