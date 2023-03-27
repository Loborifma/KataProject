let list = document.querySelector('.repair__buttons');
let listTechnics = document.querySelector('.repair-technics__buttons');
let repairButtons = list.querySelectorAll('.repair__buttons > ul > .repair__button');
let repairButtonsTechnics = listTechnics.querySelectorAll('.repair__buttons > ul > .repair-technics__button');
let showMore = list.querySelector('.repair__show');
let showMoreTechnics = listTechnics.querySelector('.repair-technics__show');
let screenWidth = document.documentElement.clientWidth;

let deg = 0;
let degTech = 0;

let open = (img, text, buttons, rotate) => {
  text.textContent = 'Скрыть';
  img.style.transform = `rotate(${rotate}deg)`;

  buttons.forEach(e => e.classList.remove('visually-hidden'));
}

let close = (img, text, buttons, rotate, numberNotHide) => {
  text.textContent = 'Показать все';
  img.style.transform = `rotate(${rotate}deg)`;

  buttons.forEach((e, i) => i >= numberNotHide ? e.classList.add('visually-hidden') : '')
}

showMore.addEventListener('click', (e) =>{
  e.preventDefault();

  let rotate = deg === 0 ? deg+=180 : deg-=180;
  let notHide = screenWidth >= 1440 ? 8 : 6;

  let showMoreImg = list.querySelector('.repair__show > img');
  let showMoreText = list.querySelector('.repair__show > span');

  if(rotate === 180){
    open(showMoreImg, showMoreText, repairButtons, rotate);
  }else{
    close(showMoreImg, showMoreText, repairButtons, rotate, notHide);
  }
});

showMoreTechnics.addEventListener('click', (e) =>{
  e.preventDefault();

  let rotate = degTech === 0 ? degTech+=180 : degTech-=180;
  let notHide = screenWidth >= 1440 ? 4 : 3;

  let showMoreImg = listTechnics.querySelector('.repair-technics__show > img');
  let showMoreText = listTechnics.querySelector('.repair-technics__show > span')

  if(rotate === 180){
    open(showMoreImg, showMoreText, repairButtonsTechnics, rotate);
  }else{
    close(showMoreImg, showMoreText, repairButtonsTechnics, rotate, notHide);
  }
});

if(screenWidth >= 1440){
  repairButtons.forEach(e => e.classList.remove('visually-hidden'));
  repairButtons.forEach((e, i) => i >= 8 ? e.classList.add('visually-hidden') : e);
  repairButtonsTechnics.forEach(e => e.classList.remove('visually-hidden'));
  repairButtonsTechnics.forEach((e, i) => i >= 4 ? e.classList.add('visually-hidden') : e);
}