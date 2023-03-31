const header = document.querySelector('.header');
const checkUp = document.querySelector('.check-up');
const headerCallBtn = header.querySelector('.header__call-btn');
const headerChatBtn = header.querySelector('.header__chat-btn');
const forms = document.querySelector('.forms');
const background = forms.querySelector('.background-forms');
const checkUpCallBtn = checkUp.querySelector('.check-up__call-btn');
const checkUpChatBtn = checkUp.querySelector('.check-up__chat-btn');
const formsWindow = forms.querySelector('.forms__window');
const chat = forms.querySelector('.feedback__chat');
const call = forms.querySelector('.feedback__call');
const legend = forms.querySelector('.forms__window > .feedback > span');
const closeFormBtn = forms.querySelector('.forms__close-btn');
const main = document.querySelector('main');
const desktopWidth = window.matchMedia('(min-width: 1439px)');
const screenWidth = document.documentElement.clientWidth;

let countChat = 0;
let countCall = 0;
let countCheckUpChat = 0;
let countCheckUpCall = 0;

let openFormChat = () => {
  forms.classList.toggle('visually-hidden');
  chat.classList.toggle('visually-hidden');
  background.classList.toggle('visually-hidden');
  main.style.zIndex = -1;
  countChat++;
}
let openFormCall = () => {
  forms.classList.toggle('visually-hidden');
  call.classList.toggle('visually-hidden');
  background.classList.toggle('visually-hidden');
  legend.textContent = 'Заказать звонок';
  main.style.zIndex = -1;
  countCall++;
}
let closeFormChat = () => {
  forms.classList.toggle('visually-hidden');
  chat.classList.toggle('visually-hidden');
  background.classList.toggle('visually-hidden');
  countChat--;
}
let closeFormCall = () => {
  forms.classList.toggle('visually-hidden');
  call.classList.toggle('visually-hidden');
  background.classList.toggle('visually-hidden');
  countCall--;
}

let closeForm = () => {
  if(countChat === 1){ 
    closeFormChat();
    main.style.zIndex = screenWidth >= 1440 ? 2 : -1;
  }
  if(countCall === 1){
    closeFormCall();
    main.style.zIndex = screenWidth >= 1440 ? 2 : -1;
  }
  if(countCheckUpChat === 1){
    countCheckUpChat--;
    checkUp.style.zIndex = 1;
    main.style.zIndex = 2;
  }
  if(countCheckUpCall === 1){
    countCheckUpCall--;
    checkUp.style.zIndex = 1;
    main.style.zIndex = 2;
  }
}

headerCallBtn.addEventListener('click', function(e){
  e.preventDefault();
  openFormCall();
});
headerChatBtn.addEventListener('click', function(e){
  e.preventDefault();
  openFormChat();
});
checkUpCallBtn.addEventListener('click', function(e){
  e.preventDefault();
  openFormCall();
  checkUp.style.zIndex = -1;
  countCheckUpCall++;
});
checkUpChatBtn.addEventListener('click', function(e){
  e.preventDefault();
  openFormChat();
  checkUp.style.zIndex = -1;
  countCheckUpChat++;
});
closeFormBtn.addEventListener('click', function(e){
  e.preventDefault();
  closeForm();
});
background.addEventListener('click', function(e){
  e.preventDefault();
  closeForm();
});

if(screenWidth >= 1439){
  checkUp.style.zIndex = 3;
  checkUp.style.bottom = 'auto';
}

window.addEventListener('resize', () => {
  if(desktopWidth.matches){
    checkUp.style.zIndex = 3;
    checkUp.style.bottom = 'auto';
  }
})
