const menu = document.querySelector(`.menu`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortBtn = document.querySelector(`.menu__btn--sort`);
const distanceFromMenuToTop = menu.offsetTop;

const toggleMenu = () => {
  if (sortBtn.getAttribute(`aria-expanded`) === `false` && filterBtn.getAttribute(`aria-expanded`) === `false`) {
    if (pageYOffset >= distanceFromMenuToTop) {
      menu.classList.add(`menu--fixed`);
    } else {
      menu.classList.remove(`menu--fixed`);
    }
  }
};

const toggleFilterAndSorting = (btn, block) => {
  btn.classList.toggle(`menu__btn--active`);

  let isExpanded = btn.getAttribute(`aria-expanded`);

  if (isExpanded === `true`) {
    menu.classList.remove(`menu--fixed`);
  } else {
    menu.classList.add(`menu--fixed`);
  }

  isExpanded = isExpanded === `true` ? `false` : `true`;

  btn.setAttribute(`aria-expanded`, isExpanded);

  block.classList.toggle(`${block.classList.contains(`filter`) ? `filter--active` : `sort-list--active`}`);
  block.style.top = `${menu.clientHeight}px`;
};

window.addEventListener(`scroll`, toggleMenu);
menu.addEventListener(`click`, (e) => {
  const btn = e.target.closest(`.menu__btn`);

  if (!btn) {
    return;
  }

  if (btn.classList.contains(`menu__btn--filter`)) {
    toggleFilterAndSorting(btn, filter);

    sortBtn.setAttribute(`aria-expanded`, `false`);
    sorting.classList.remove(`sort-list--active`);
    sortBtn.classList.remove(`menu__btn--active`);
  } else if (btn.classList.contains(`menu__btn--sort`)) {
    toggleFilterAndSorting(btn, sorting);

    filter.classList.remove(`filter--active`);
    filterBtn.classList.remove(`menu__btn--active`);
    filterBtn.setAttribute(`aria-expanded`, `false`);
  }

  toggleMenu();
});
