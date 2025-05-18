document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    parallax: true,
    speed: 1000,

    initialSlide: '2',
    watchOverflow: true,
    centeredSlides: true,
    spaceBetween: 50,
    zoom: false,

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
});