import './scss/index.scss';

const burger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const body = document.getElementsByTagName('body');

burger.addEventListener('click', toggleMenu, false);

function toggleMenu() {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  header.classList.toggle('active');
  body[0].classList.toggle('lock');
}

const prevSlide = document.querySelector('.prev');
const nextSlide = document.querySelector('.next');

prevSlide.addEventListener('click', showNextSlide, false);
nextSlide.addEventListener('click', showPrevSlide, false);

let slideIndex = 1;
toggleSlides(slideIndex);

function showNextSlide() {
  toggleSlides(slideIndex += 1);
}

function showPrevSlide() {
  toggleSlides(slideIndex -= 1);
}

function toggleSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
