let about = document.querySelector('.services__about');
let showMore = about.querySelector('.services__read-more-button');
let showMoreIcon = about.querySelector('.services__about-icon');
let description = about.querySelector('.services__description');

let deg = 0;

showMore.onclick = () => {
  if(deg === 0){
    deg += 180;
    showMoreIcon.style.transform = `rotate(${deg}deg)`;
    description.style.height = 'auto';
  }else{
    deg -= 180;
    showMoreIcon.style.transform = `rotate(${deg}deg)`;
    description.style.height = '90px';
  }
}