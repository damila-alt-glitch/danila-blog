// Л13: переменная, индексы, длина массива и цикл.
// Л14: querySelectorAll и style.display.
var slides = document.querySelectorAll('.slide');
var slideIndex = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
  document.getElementById('slide-count').innerHTML = (slideIndex + 1) + ' / ' + slides.length;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex == slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();
