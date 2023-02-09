// nav bar menu
const navBar = document.querySelector('.nav-menu');

const displayMenu = () => {
    const navBar = document.querySelector('.nav');
    navBar.classList.toggle('resp-nav-bar');
}

navBar.addEventListener('click', displayMenu)

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});