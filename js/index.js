window.addEventListener('DOMContentLoaded', () => {


const prize = document.querySelector('.open-prize');
const close = document.querySelector('.modal_close');
const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal_window');
const header = document.querySelector('.header');
const overflow = document.querySelector('body');
const complectsBtn = document.querySelectorAll('.section_complects__btn');



prize.addEventListener('click', changePrize);

function changePrize (event) {
header.classList.add('hidden');
overlay.classList.add('overlay_active');
overflow.classList.add('overflow');
modalWindow.classList.add('modal_window_active');
}

close.addEventListener('click', closeMenu);

function closeMenu(event){
header.classList.remove('hidden');
overlay.classList.remove('overlay_active');
overflow.classList.remove('overflow');
modalWindow.classList.remove('modal_window_active');
}

complectsBtn.forEach(btn => {btn.addEventListener('click', toLearnMore)});

function toLearnMore(event){
  header.classList.add('hidden');
  overlay.classList.add('overlay_active');
  modalWindow.classList.add('modal_form__active');
}

// hamburger

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav-list');
const linkMenu = Array.from(document.querySelectorAll('.header__nav-item'));
const toggle = () => {
  navList.classList.toggle('nav-open');
  hamburger.classList.toggle('open');
  for (let i = 0; i < linkMenu.length; i++) {
   linkMenu[i].addEventListener('click', toggle)
  };
};
hamburger.addEventListener('click', toggle);





});

