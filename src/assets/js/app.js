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


  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
