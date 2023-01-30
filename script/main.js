let ham_btn = document.querySelector(".ham-nav")
let links = document.querySelector("header .containe .links")

ham_btn.addEventListener("click", () => {
    links.classList.toggle("open-nav")
})


// Seiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
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

      // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
  });

// Scroll Reval Library

ScrollReveal().reveal('.topSCroll',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 1000,
    reset: false,
});


$(document).ready(function () {
    var mixer = mixitup(".box-list")
})

let Scroll_Botoom = document.querySelector(".main-Content .container .row .scroll")
Scroll_Botoom.addEventListener("click", () => {
  window.scrollTo(0 , 10000);

})
