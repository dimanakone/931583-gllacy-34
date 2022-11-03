'use strict';

// Открытие поповеров в меню при наведении
const navUser = document.querySelector('.navigation-user');

const navItems = document.querySelectorAll('.navigation-item');
const popovers = document.querySelectorAll('.popover');

const popoverCart = document.querySelector('.popover-cart');
const popoverLogin = document.querySelector('.popover-login');
const popoverSearch = document.querySelector('.popover-search');
const popoverCatalog = document.querySelector('.popover-catalog');

const linkCart = document.querySelector('.navigation-cart');
const linkLogin = document.querySelector('.navigation-login');
const linkSearch = document.querySelector('.navigation-search');
const linkCatalog = document.querySelector('.navigation-catalog');

navItems.forEach((element) => {
  element.addEventListener('mouseenter', (evt) => {
    const target = evt.target;
    popovers.forEach((popover) => {
      popover.classList.remove('popover-active');
    });
    if (target.contains(linkCatalog)) {
      popoverCatalog.classList.add('popover-active');
    }
    if (target.contains(linkCart)) {
      popoverCart.classList.add('popover-active');
    }
    if (target.contains(linkLogin)) {
      popoverLogin.classList.add('popover-active');
    }
    if (target.contains(linkSearch)) {
      popoverSearch.classList.add('popover-active');
    }
  })
})

popovers.forEach((popover) => {
  popover.addEventListener('mouseleave', () => {
    popover.classList.remove('popover-active');
  })
});


// Модальное окно формы обратной связи
const feedbackButton = document.querySelector('.button-feedback');
const feedbackModal = document.querySelector('.modal-container');
const buttonClosingModal = document.querySelector('.modal-close-button');

feedbackButton.addEventListener('click', openModal);
/*
* Обработчик события клика по кнопке открытия модального окна
*/
function openModal() {
  feedbackModal.classList.remove('modal-container-hidden');
  // обработчики событий, которые работают, когда окно открыто
  attachModalEvents();
}
/*
* Функция назначает обработчики событий к элементам модального окна при открытии
*/
function attachModalEvents() {
  // закрывать модальное окно при нажатии на крестик
  buttonClosingModal.addEventListener('click', closeModal);
  // закрывать модальное окно при нажатии клавиши Escape
  document.addEventListener('keydown', handleEscape);
  // закрывать модальное окно при клике вне контента модального окна
  feedbackModal.addEventListener('click', handleOutside);
}
/*
* Обработчик события клика по кнопке закрытия модального окна
*/
function closeModal() {
  feedbackModal.classList.add('modal-container-hidden');
  // окно закрыто, эти обработчики событий больше не нужны
  detachModalEvents();
}
/*
* Функция удаляет обработчики событий к элементам модального окна при закрытии
*/
function detachModalEvents() {
  buttonClosingModal.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handleEscape);
  feedbackModal.removeEventListener('click', handleOutside);
}
/*
* Функция закрывает модальное окно при нажатии клавиши Escape
*/
function handleEscape(event) {
  if (event.key === 'Escape') {
      closeModal();
  }
}
/*
* Функция закрывает модальное окно при клике вне контента модального окна
*/
function handleOutside(event) {
  const isClickInside = !!event.target.closest('.modal');
  if (!isClickInside) {
      closeModal();
  }
}


// Сладер
const slides = document.querySelectorAll('.slide-content-item');
const btnPrev = document.querySelector('.toggle-button-prev');
const btnNext = document.querySelector('.toggle-button-next');
const flips = document.querySelectorAll('.slider-flip-button');
const slideImages = document.querySelectorAll('.slide-image-item');
const bodyColorTheme = document.querySelector('.color-theme');

let slideIndex = 0;

btnNext.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});

btnPrev.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

flips.forEach((flip, index) => {
  flip.addEventListener('click', () => {
    for (let slide of slides) {
      slide.classList.remove('slide-content-active');
    }
    for (let img of slideImages) {
      img.classList.remove('slide-image-active');
    }
    for (let flip of flips) {
      flip.classList.remove('slider-flip-button-current');
    }
    slides[index].classList.add('slide-content-active');
    flips[index].classList.add('slider-flip-button-current');
    slideImages[index].classList.add('slide-image-active');
    if (index === 0) {
      bodyColorTheme.classList.remove('slider-active-blue');
      bodyColorTheme.classList.remove('slider-active-yellow');
      bodyColorTheme.classList.add('slider-active-pink');
    } else if (index === 1) {
      bodyColorTheme.classList.remove('slider-active-pink');
      bodyColorTheme.classList.remove('slider-active-blue');
      bodyColorTheme.classList.add('slider-active-yellow');
    } else if (index === 2) {
      bodyColorTheme.classList.remove('slider-active-yellow');
      bodyColorTheme.classList.remove('slider-active-pink');
      bodyColorTheme.classList.add('slider-active-blue');
    }
  })
})

function showSlides(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    slide.classList.remove('slide-content-active');
  }
  for (let img of slideImages) {
    img.classList.remove('slide-image-active');
  }
  for (let flip of flips) {
    flip.classList.remove('slider-flip-button-current');
  }
  slides[slideIndex].classList.add('slide-content-active');
  flips[slideIndex].classList.add('slider-flip-button-current');
  slideImages[slideIndex].classList.add('slide-image-active');
  if (slideIndex === 0) {
    bodyColorTheme.classList.remove('slider-active-blue');
    bodyColorTheme.classList.remove('slider-active-yellow');
    bodyColorTheme.classList.add('slider-active-pink');
  }
  if (slideIndex === 1) {
    bodyColorTheme.classList.remove('slider-active-pink');
    bodyColorTheme.classList.remove('slider-active-blue');
    bodyColorTheme.classList.add('slider-active-yellow');
  }
  if (slideIndex === 2) {
    bodyColorTheme.classList.remove('slider-active-yellow');
    bodyColorTheme.classList.remove('slider-active-pink');
    bodyColorTheme.classList.add('slider-active-blue');
  }
};

// // Слайдер преимуществ

// const advantagesItems = document.querySelectorAll('.advantages-button-item');
// const advantagesButtoms = document.querySelectorAll('.advantages-button');
// const advantagesContents = document.querySelectorAll('.advantages-content');

// let advantagesIndex = 0;

// advantagesButtoms.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     for (let item of advantagesButtoms) {
//       item.classList.remove('advantages-button-current');
//     }
//     for (let content of advantagesContents) {
//       content.classList.add('advantages-content-hidden');
//     }
//     for (let content of advantagesItems) {
//       content.classList.remove('advantages-item-current');
//     }
//     advantagesButtoms[index].classList.add('advantages-button-current');
//     advantagesContents[index].classList.remove('advantages-content-hidden');
//     advantagesItems[index].classList.add('advantages-item-current');
//   })
// });
