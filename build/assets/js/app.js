const swiper = new Swiper(".image-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  preloadImages: false,
  lazy: true,
});

document
  .getElementsByClassName("image-slider")[0]
  .addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });

document
  .getElementsByClassName("image-slider")[0]
  .addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });

// слайдер promo......
const myswiper2 = new Swiper(".promo-slider", {
  loop: true,
  slidesPerView: 1,
  // slidesPerGroup: 10,
  spaceBetween: 20,
  // breakpointsInverse: true,
  // dynamicMainBullets: 5,


  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next.promo--slider.promo_arrow-next",
    prevEl: " .swiper-button-prev.promo--slider.promo_arrow-prev",
  },
  breakpoints: {
    // when window width is <= 575px
    319: {
      slidesPerView: 1,
      spaceBetween: 40
    },

    840: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is <= 768px
    864: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is <= 992px
    1150: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20
    }
    },
  preloadImages: true,
  lazy: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


$(document).ready(function () {
  $(".burger").on("click", function () {
    $(".nav-list").toggleClass("active");
  });
});
