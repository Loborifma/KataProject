const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const background = document.querySelector('.background-header');
const checkUp = document.querySelector('.check-up');
const burger = menu.querySelector('.header__menu-burger-btn');
const burgerClose = menu.querySelector('.header__menu-close-btn');
const searchBtn = menu.querySelector('.header__menu-search-btn');
const menuHeader = menu.querySelector('.header__menu-header');
const menuBody = menu.querySelector('.header__menu-body');
const menuFooter = menu.querySelector('.header__menu-footer');
const main = document.querySelector('main');
const body = document.querySelector('body');
const desktopWidth = window.matchMedia('(min-width: 1439px)');
const mobileWidth = window.matchMedia('(min-width: 767px)');


let openBurger = () => {
  menu.style.boxShadow = '16px 0px 52px rgba(14, 24, 80, 0.2)'
  menu.style.width = '320px';
  menu.style.bottom = '0';
  menu.style.position = 'fixed';
  body.style.overflow = 'hidden';
  checkUp.style.zIndex = '-1';
  main.style.zIndex = '-1';
  burgerClose.classList.remove('visually-hidden');
  searchBtn.classList.remove('visually-hidden');
  burger.classList.add('visually-hidden');
  menuHeader.style.marginBottom = '24px';
  menuBody.classList.remove('visually-hidden');
  menuFooter.classList.remove('visually-hidden');
  background.classList.remove('visually-hidden');
}

let closeBurger = () => {
  menu.style.boxShadow = '0 1px 0 0 #B8FFEC';
  menu.style.width = '100%';
  menu.style.bottom = 'auto';
  menu.style.position = 'absolute';
  header.style.zIndex = '0';
  checkUp.style.zIndex = '1';
  main.style.zIndex = '2';
  body.style.overflow = 'auto';
  background.classList.add('visually-hidden');
  burgerClose.classList.add('visually-hidden');
  searchBtn.classList.add('visually-hidden');
  burger.classList.remove('visually-hidden');
  menuHeader.style.marginBottom = '0';
  menuBody.classList.add('visually-hidden');
  menuFooter.classList.add('visually-hidden');
}

burger.addEventListener('click', function(e){
  e.preventDefault();
  openBurger();
});
burgerClose.addEventListener('click', function(e){
  e.preventDefault();
  closeBurger();  
});
background.addEventListener('click', function(e){
  e.preventDefault();
  closeBurger();  
});

if(desktopWidth.matches){
  openBurger();
  menu.style.boxShadow = 'none';
  main.style.zIndex = 2;
  body.style.overflow = 'auto';
  burgerClose.classList.add('visually-hidden');
  background.classList.add('visually-hidden');
}

window.addEventListener('resize', () => {
  let screenWidth = document.documentElement.clientWidth;
  
  if(screenWidth === 1439){
    location.reload();
    return false;
  }
})