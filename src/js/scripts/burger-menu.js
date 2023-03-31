let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let background = document.querySelector('.background-header');
let checkUp = document.querySelector('.check-up');
let burger = menu.querySelector('.header__menu-burger-btn');
let burgerClose = menu.querySelector('.header__menu-close-btn');
let searchBtn = menu.querySelector('.header__menu-search-btn');
let menuHeader = menu.querySelector('.header__menu-header');
let menuBody = menu.querySelector('.header__menu-body');
let menuFooter = menu.querySelector('.header__menu-footer');
let main = document.querySelector('main');
let body = document.querySelector('body');
let desktopWidth = window.matchMedia('(min-width: 1439px)');
let mobileWidth = window.matchMedia('(min-width: 767px)');
let screenWidth = document.documentElement.clientWidth;

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