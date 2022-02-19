const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 5000,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    // type: 'bullets',
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


  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

document.getElementsByClassName("image-slider")[0].addEventListener("mouseover", function( ) {
  swiper.autoplay.stop();
});

document.getElementsByClassName("image-slider")[0].addEventListener("mouseout", function( ) {
  swiper.autoplay.start();
});


// const myswiper = new Swiper(".promo-slider.swiper", {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: false,
//   // autoplay: {
//   //   delay: 5000,
//   // },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     type: 'bullets',
//     // clickable: true
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   preloadImages: false,
//   // Enable lazy loading
//   lazy: true,


//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
