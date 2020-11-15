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