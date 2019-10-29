const menu = document.querySelector('.header__menu-mobile-fixed');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu_open');
    if (burgerMenu.classList.contains('burger-menu_open')) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});