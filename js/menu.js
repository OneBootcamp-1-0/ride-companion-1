const menu = document.querySelector(`.menu`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortBtn = document.querySelector(`.menu__btn--sort`);
const distanceFromMenuToTop = menu.offsetTop;

window.addEventListener(`scroll`, () => {
  if (pageYOffset >= distanceFromMenuToTop) {
    menu.classList.add(`menu--fixed`);
  } else {
    menu.classList.remove(`menu--fixed`);
  }
});

menu.addEventListener('click', e => {
  const btn = e.target.closest(`.menu__btn`);

  if (!btn) return;

  btn.classList.toggle(`menu__btn--active`);

  if (btn.classList.contains(`menu__btn--filter`)) {
    filter.classList.toggle(`filter--active`);
    sorting.classList.remove(`sort-list--active`);
    sortBtn.classList.remove(`menu__btn--active`);
  } else if (btn.classList.contains(`menu__btn--sort`)) {
    sorting.classList.toggle(`sort-list--active`);
    filter.classList.remove(`filter--active`);
    filterBtn.classList.remove(`menu__btn--active`);
  }
});
