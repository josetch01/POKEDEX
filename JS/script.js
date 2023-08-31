var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 45,
    centerSlide:'true',
    grabCursor:'true',
    loop:true,
    fade:'true',
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      950:{
        slidesPerView:2,
      }
    }
  });