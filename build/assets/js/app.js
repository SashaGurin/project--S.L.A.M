const swiper = new Swiper(".image-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

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
  slidesPerView: 4,
  slidesPerGroup: 10,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next.promo--slider.promo_arrow-next",
    prevEl: " .swiper-button-prev.promo--slider.promo_arrow-prev",
  },
  preloadImages: true,

  lazy: true,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// $(document).ready(function () {
//   $(".chbx").click(function () {
//     $(this).parent().toggleClass("on");
//   });
// });



