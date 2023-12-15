// Initialize Swiper
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    navigation: {          
        nextEl: ".swiper-button-next",          
        prevEl: ".swiper-button-prev",        
    }
});