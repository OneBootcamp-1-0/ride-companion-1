const callCarousel = () => {
  const carousels = document.querySelectorAll(`.carousel`);
  const carouselMoveVal = 255;

  // Init of all the carousel on the page

  const init = () => {
    const activeSlideNum = 2;

    // Add active class for imgs, shown firstly
    document.querySelectorAll(`img[data-i="${activeSlideNum}"]`).forEach((img) => {
      img.classList.add(`carousel__img--active`);
    });

    // Add tracking of active slide
    carousels.forEach((carousel) => {
      carousel.firstElementChild.dataset.activeSlide = activeSlideNum;
      if (carousel.firstElementChild.children.length === 2) {
        carousel.children[2].disabled = true;
      }
    });
  };

  const moveCarousel = (carousel, direction) => {
    const imgsList = carousel.firstElementChild;
    const currTranslate = +imgsList.dataset.translate;

    // Check if current slide is the last then don't move carousel anymore
    if (direction === `right` && +imgsList.dataset.activeSlide === imgsList.children.length) {
      return;
    } else if (direction === `left` && +imgsList.dataset.activeSlide === 1) {
      return;
    }

    if (direction === `right` && +imgsList.dataset.activeSlide === 1) {
      carousel.children[1].disabled = false;
    } else if (direction === `left` && +imgsList.dataset.activeSlide === imgsList.children.length) {
      carousel.children[2].disabled = false;
    }

    if (direction === `right` && +imgsList.dataset.activeSlide === imgsList.children.length - 1) {
      carousel.children[2].disabled = true;
    } else if (direction === `left` && +imgsList.dataset.activeSlide === 2) {
      carousel.children[1].disabled = true;
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
    Array.from(imgsList.children).forEach((img) => {
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

  carousels.forEach((carousel) => {
    carousel.addEventListener(`click`, (e) => {
      if (e.target.closest(`.carousel__btn--right`)) {
        return moveCarousel(carousel, `right`);
      }
      if (e.target.closest(`.carousel__btn--left`)) {
        return moveCarousel(carousel, `left`);
      }
      return ``;
    });
  });

  init();
};

window.callCarousel = callCarousel;
