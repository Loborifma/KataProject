import Swiper, {Pagination} from "swiper";

window.addEventListener('resize', () => {
  let screenWidth = document.documentElement.clientWidth;

  if(screenWidth === 766){
    new Swiper('.swiper', {
      modules: [Pagination],
      spaceBetween: 30,
      width: 240,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }
})
