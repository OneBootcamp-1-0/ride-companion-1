const menu = document.querySelector(`.menu`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortBtn = document.querySelector(`.menu__btn--sort`);
const distanceFromMenuToTop = menu.offsetTop;

window.addEventListener(`scroll`, () => {
  if (sortBtn.getAttribute(`aria-expanded`) === `false` && filterBtn.getAttribute(`aria-expanded`) === `false`) {
    if (pageYOffset >= distanceFromMenuToTop) {
      menu.classList.add(`menu--fixed`);
    } else {
      menu.classList.remove(`menu--fixed`);
    }
  }
});

menu.addEventListener(`click`, (e) => {
  const btn = e.target.closest(`.menu__btn`);

  if (!btn) {
    return;
  }

  btn.classList.toggle(`menu__btn--active`);

  let isExpanded = btn.getAttribute(`aria-expanded`);

  if (isExpanded === `true`) {
    menu.classList.remove(`menu--fixed`);
  } else {
    menu.classList.add(`menu--fixed`);
  }
  isExpanded = isExpanded === `true` ? `false` : `true`;
  btn.setAttribute(`aria-expanded`, isExpanded);

  if (btn.classList.contains(`menu__btn--filter`)) {
    filter.classList.toggle(`filter--active`);
    sorting.classList.remove(`sort-list--active`);
    sortBtn.classList.remove(`menu__btn--active`);
    filter.style.top = `${menu.clientHeight}px`;
    sortBtn.setAttribute(`aria-expanded`, `false`);
  } else if (btn.classList.contains(`menu__btn--sort`)) {
    sorting.classList.toggle(`sort-list--active`);
    filter.classList.remove(`filter--active`);
    filterBtn.classList.remove(`menu__btn--active`);
    sorting.style.top = `${menu.clientHeight}px`;
    filterBtn.setAttribute(`aria-expanded`, `false`);
  }

  if (sortBtn.getAttribute(`aria-expanded`) === `false` && filterBtn.getAttribute(`aria-expanded`) === `false`) {
    if (pageYOffset >= distanceFromMenuToTop) {
      menu.classList.add(`menu--fixed`);
    } else {
      menu.classList.remove(`menu--fixed`);
    }
  }
});
