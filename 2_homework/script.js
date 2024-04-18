// Получаем элементы слайдера
const sliderEl = document.querySelector('.slider');
const slidesElems = Array.from(sliderEl.querySelectorAll('.image'));
const dots = sliderEl.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev_btn');
const nextButton = document.querySelector('.next_btn');

const slideCount = slidesElems.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => jumpToSlide(index));
  });

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для перехода по слайду
function jumpToSlide(index) {
  slideIndex = index;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slidesElems.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();