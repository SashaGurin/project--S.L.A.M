const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  preloadImages: false,
  // Enable lazy loading
  lazy: true,


  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

document.getElementsByClassName("swiper")[0].addEventListener("mouseover", function( ) {
  swiper.autoplay.stop();
});

document.getElementsByClassName("swiper")[0].addEventListener("mouseout", function( ) {
  swiper.autoplay.start();
});
