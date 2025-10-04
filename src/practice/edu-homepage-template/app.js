// Initialize Swiper
var swiper1 = new Swiper(".slider1", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper2 = new Swiper(".slider2", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 4,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 4,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 4,
        },
    },
});
