"use strict";
// const mainElement = document.documentElement;

// let space = '/*/*/*/*/*/*/*/*/';
// console.log(space);

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}


// Menu Burger

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (menuIcon) {
    menuIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// // Инициализируем Swiper

// new Swiper('.agents__slider', {

//     simulateTouch: false,

//     Keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//         pageUpDown: true,
//     },

//     spaceBetween: 72,

//     breakpoints: {
//         2660: {
//             slidesPerView: 3.8,
//             spaceBetween: 72,
//         },
//         2760: {
//             slidesPerView: 3.9,
//             spaceBetween: 72,            
//         },        
//         2860: {
//             spaceBetween: 72,
//             slidesPerView: 4,
//         },
//     },
//     speed: 800,

//     freeMode: true,

//     watchOverflow: true,
// });

