const partnerSlider = new Swiper(".js-partners-slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".js-partners-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".js-partners-next",
      prevEl: ".js-partners-prev",
      disabledClass: "nav-btn--disabled"
    },
  
    breakpoints: {
    440: {
        slidesPerView: 2,
        spaceBetween: 20
        },

    611: {
        slidesPerView: 2,
        spaceBetween: 34
        },
    971: {
        slidesPerView: 2,
        spaceBetween: 50
    },

    1281: {
        slidesPerView: 3,
        spaceBetween: 50
    }
    },
})