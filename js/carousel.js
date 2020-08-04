const carousels = document.querySelectorAll(`.carousel`);
const carouselMoveVal = 255;

//Init of all the carousel on the page

const init = () => {
  const activeSlideNum = 2;

  // Add active class for imgs, shown firstly
  document.querySelectorAll(`img[data-i="${activeSlideNum}"]`).forEach(img => {
    img.classList.add(`carousel__img--active`);
  });

  // Add tracking of active slide
  carousels.forEach(carousel => {
    carousel.firstElementChild.dataset.activeSlide = activeSlideNum;
  })
};

const moveCarousel = (carousel, direction) => {
  const imgsList = carousel.firstElementChild;
  const currTranslate = +imgsList.dataset.translate;

  // Check if current slide is the last then don't move carousel anymore
  if (direction === `right`) {
    if (+imgsList.dataset.activeSlide === imgsList.children.length) {
      return;
    }
  } else {
    if (+imgsList.dataset.activeSlide === 1) {
      return;
    }
  }
  
  // Move the carousel
  if (direction === `right`) {
    imgsList.style.transform = `translateX(-${carouselMoveVal - currTranslate}px)`;
    imgsList.dataset.translate = -(carouselMoveVal - currTranslate);
    imgsList.dataset.activeSlide = +imgsList.dataset.activeSlide + 1;
  } else {
    imgsList.style.transform = `translateX(${carouselMoveVal + currTranslate}px)`;
    imgsList.dataset.translate = carouselMoveVal + currTranslate;
    imgsList.dataset.activeSlide = +imgsList.dataset.activeSlide - 1;
  }

  // Move active class to a side, depending on the btn direction
  Array.from(imgsList.children).forEach(img => {
    if (+img.dataset.i === +imgsList.dataset.activeSlide) {
      img.classList.add(`carousel__img--active`);
      if (direction === `right`) {
        img.previousSibling.classList.remove(`carousel__img--active`);
      } else {
        img.nextSibling.classList.remove(`carousel__img--active`);
      }
    }
  });
};

carousels.forEach(carousel => {
  carousel.addEventListener(`click`, e => {
    if (e.target.closest(`.carousel__btn--right`)) {
      return moveCarousel(carousel, `right`)
    }
    if (e.target.closest(`.carousel__btn--left`)) {
      return moveCarousel(carousel, `left`)
    }
  });
});

init();
