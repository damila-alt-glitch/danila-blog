'use strict';
(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const slides = [
    { image: 'climbing.svg', title: 'Немного выше', description: 'Скалодром. Задача, которую решаешь всем телом.', alt: 'Стена скалодрома с разноцветными зацепами' },
    { image: 'gaming.svg', title: 'По ту сторону экрана', description: 'Игры на ПК. Другие миры и новые задачи.', alt: 'Игровой контроллер на фиолетовом фоне' },
    { image: 'workshop.svg', title: 'Мелкие детали', description: 'Пайка и компьютеры. Любопытство к тому, что внутри.', alt: 'Электронная плата с микросхемой и соединениями' },
    { image: 'world.svg', title: 'Четыре стороны меня', description: 'Скалодром, игры, пайка и компьютеры — в одном блоге.', alt: 'Коллаж из иллюстраций четырёх увлечений Данилы' }
  ];
  let current = 0;
  const dots = [...document.querySelectorAll('[data-slide]')];
  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    const image = document.querySelector('#slide-image');
    image.src = `img/${slide.image}`;
    image.alt = slide.alt;
    document.querySelector('#slide-title').textContent = slide.title;
    document.querySelector('#slide-description').textContent = slide.description;
    document.querySelector('#slide-number').textContent = `0${current + 1} / 04`;
    document.querySelector('#slide-status').textContent = `Изображение ${current + 1} из 4. ${slide.title}.`;
    dots.forEach((dot, i) => { if (i === current) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current'); });
  }
  document.querySelector('#slide-prev').addEventListener('click', () => showSlide(current - 1));
  document.querySelector('#slide-next').addEventListener('click', () => showSlide(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); showSlide(current + (event.key === 'ArrowRight' ? 1 : -1)); }
  });
})();
