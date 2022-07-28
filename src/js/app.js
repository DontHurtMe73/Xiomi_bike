import Swiper, {
  Pagination,
  Autoplay,
  EffectFade
} from 'swiper';

const bike = new Swiper('.bike__swiper', {
  modules: [Pagination, Autoplay, EffectFade],
  direction: 'vertical',
  loop: true,
  effect: 'fade',
  followFinger: false,
  autoHeight: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  }
});

const slider = new Swiper('.slider__swiper', {
  modules: [Pagination, Autoplay, EffectFade],
  direction: 'vertical',
  loop: true,
  effect: 'fade',
  autoHeight: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  }
});


{
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

      this.classList.toggle("active");


      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

{
  let arrowTop = document.querySelector('.back_to_top')

  arrowTop.onclick = function () {
    window.scrollTo(window.pageXOffset, 0);
  };

  window.addEventListener('scroll', function () {
    arrowTop.hidden = (window.pageYOffset < document.documentElement.clientHeight);
  })
}