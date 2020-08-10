const menu = document.querySelector(`.menu`);
const distanceFromMenuToTop = menu.offsetTop;

window.addEventListener(`scroll`, () => {
  if (pageYOffset >= distanceFromMenuToTop) {
    menu.classList.add(`menu--fixed`);
  } else {
    menu.classList.remove(`menu--fixed`);
  }
});
