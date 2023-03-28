let header = document.querySelector('.header');
let checkUp = document.querySelector('.check-up');
let headerCallBtn = header.querySelector('.header__call-btn');
let headerChatBtn = header.querySelector('.header__chat-btn');
let forms = document.querySelector('.forms');
let background = forms.querySelector('.background-forms');
let checkUpCallBtn = checkUp.querySelector('.check-up__call-btn');
let checkUpChatBtn = checkUp.querySelector('.check-up__chat-btn');
let formsWindow = forms.querySelector('.forms__window');
let chat = forms.querySelector('.feedback__chat');
let call = forms.querySelector('.feedback__call');
let legend = forms.querySelector('.forms__window > .feedback > span');
let closeFormBtn = forms.querySelector('.forms__close-btn');
let main = document.querySelector('main');
let screenWidth = document.documentElement.clientWidth;

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

