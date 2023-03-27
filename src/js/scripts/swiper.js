import Swiper, {Pagination} from "swiper";

new Swiper('.swiper', {
  modules: [Pagination],
  spaceBetween: 30,
  width: 240,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

