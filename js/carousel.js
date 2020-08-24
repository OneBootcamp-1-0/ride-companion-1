class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.carouselList = carousel.firstElementChild;
    this.leftArrow = `<button class="carousel__btn carousel__btn--left" type="button" aria-label="предыдущий слайд">
      <svg class="carousel__arrow" width="18" height="82" viewBox="0 0 18 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
        <line x1="15.9391" y1="0.343582" x2="0.939123" y2="41.3436" stroke-width="2"/>
        <line x1="16.0626" y1="81.343" x2="1.0592" y2="40.3443" stroke-width="2"/>
      </svg>
    </button>`;
    this.rightArrow = `<button class="carousel__btn carousel__btn--right" type="button" aria-label="следующий слайд">
      <svg class="carousel__arrow" width="17" height="82" viewBox="0 0 17 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
        <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343547 0.939135 0.93911 -0.343616 2.0016 0)" stroke-width="2"/>
        <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343625 -0.939107 -0.939082 -0.343694 0.000106812 81)" stroke-width="2"/>
      </svg>
    </button>`;
    this.activeSlideNum = 2;
    this.translateVal = 255;
    this.initialTranslateVal = -224;
    this.carouselListElems = Array.from(this.carouselList.children);
  }

  _addArrows() {
    this.carouselList.after(window.utils.createElement(this.leftArrow));
    this.carouselList.after(window.utils.createElement(this.rightArrow));

    this.leftArrowNode = this.carousel.querySelector(`.carousel__btn--left`);
    this.rightArrowNode = this.carousel.querySelector(`.carousel__btn--right`);
  }

  _removeScroll() {
    this.carouselList.classList.remove(`carousel__list--scroll`);
  }

  _blurInactiveSldes() {
    this.carouselListElems.forEach((element, i) => {
      element.style.filter = `blur(${i + 1 === +this.carouselList.dataset.activeSlide ? 0 : 2}px)`;
    });
  }

  init() {
    this._removeScroll();

    if (this.carouselListElems.length > 1) {
      this._addArrows();
      this.carouselList.style.transform = `translateX(${this.initialTranslateVal}px)`;

      this.carouselList.dataset.activeSlide = this.activeSlideNum;

      this._blurInactiveSldes();

      this.leftArrowNode.addEventListener(`click`, () => {
        this._move(this.leftArrowNode);
      });

      this.rightArrowNode.addEventListener(`click`, () => {
        this._move(this.rightArrowNode);
      });
    }
  }

  _toggleDisabled(btn) {
    if (btn === this.leftArrowNode && this.activeSlideNum === this.carouselListElems.length) {
      this.rightArrowNode.disabled = false;
      return;
    }

    if (btn === this.rightArrowNode && this.activeSlideNum === 1) {
      this.leftArrowNode.disabled = false;
      return;
    }

    if ((btn === this.leftArrowNode && this.activeSlideNum === 2)
      || btn === this.rightArrowNode && this.activeSlideNum === this.carouselListElems.length - 1) {
      btn.disabled = true;
      return;
    }
    return;
  }

  _move(btn) {
    const isLeftBtn = btn === this.leftArrowNode;

    const currTranslateNum = parseInt(this.carouselList.style.transform.match(/(\-)?\d+/));

    this._toggleDisabled(btn);

    this.carouselList.style.transform = `translateX(${isLeftBtn ? `${this.translateVal + currTranslateNum}` : `-${this.translateVal - currTranslateNum}`}px)`;

    this.activeSlideNum = isLeftBtn ? this.activeSlideNum - 1 : this.activeSlideNum + 1;

    this.carouselList.dataset.activeSlide = this.activeSlideNum;

    this._blurInactiveSldes();
  }
}

window.Carousel = Carousel;
