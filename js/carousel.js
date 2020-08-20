const callCarousel = () => {
  const carousels = document.querySelectorAll(`.carousel`);
  const carouselMoveVal = 255;
  const leftArrow = `<button class="carousel__btn carousel__btn--left" type="button" aria-label="предыдущий слайд">
    <svg class="carousel__arrow" width="18" height="82" viewBox="0 0 18 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
      <line x1="15.9391" y1="0.343582" x2="0.939123" y2="41.3436" stroke-width="2"/>
      <line x1="16.0626" y1="81.343" x2="1.0592" y2="40.3443" stroke-width="2"/>
    </svg>
  </button>`;
  const rightArrow = `<button class="carousel__btn carousel__btn--right" type="button" aria-label="следующий слайд">
    <svg class="carousel__arrow" width="17" height="82" viewBox="0 0 17 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
      <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343547 0.939135 0.93911 -0.343616 2.0016 0)" stroke-width="2"/>
      <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343625 -0.939107 -0.939082 -0.343694 0.000106812 81)" stroke-width="2"/>
    </svg>
  </button>`;

  const addArrows = (boolean, carousel) => {
    if (boolean) {
      carousel.appendChild(window.createElement(leftArrow));
      carousel.appendChild(window.createElement(rightArrow));
    }
  };

  // Init of all the carousel on the page
  const init = () => {
    const activeSlideNum = 2;
    // Add tracking of active slide
    carousels.forEach((carousel) => {
      const imgList = carousel.firstElementChild;
      if (imgList.children.length > 1) {
        imgList.classList.remove(`carousel__list--scroll`);
        addArrows(true, carousel);
        imgList.style.transform = `translateX(-224px)`;
        Array.from(imgList.children).forEach((img) => {
          img.style.filter = `blur(2px)`;
        });
      }
      imgList.dataset.activeSlide = activeSlideNum;
      if (imgList.children.length === 2) {
        carousel.children[2].disabled = true;
      }
    });
    // Add active class for imgs, shown firstly
    document.querySelectorAll(`img[data-i="${activeSlideNum}"]`).forEach((img) => {
      img.classList.add(`carousel__img--active`);
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
