const swiper = new Swiper(".image-slider", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    // clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  // loop:true,

});

document.getElementsByClassName("image-slider")[0].addEventListener("mouseover", function( ) {
  swiper.autoplay.stop();
});

document.getElementsByClassName("image-slider")[0].addEventListener("mouseout", function( ) {
  swiper.autoplay.start();
});

const myswiper2 = new Swiper(".promo-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 10,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.promo--slider.promo_arrow-next",
    prevEl: " .swiper-button-prev.promo--slider.promo_arrow-prev",
  },
  preloadImages: true,

  lazy: true,


  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
