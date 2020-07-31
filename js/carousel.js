const activeSlideNum = 2;

//Init all the carousel on the page
const init = () => {
  // Add active class for imgs, shown firstly
  document.querySelectorAll(`img[data-i="${activeSlideNum}"]`).forEach(img => {
    img.classList.add(`carousel__img--active`);
  });
};

init();
