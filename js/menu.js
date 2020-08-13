const menu = document.querySelector(`.menu`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const menuBtns = document.querySelectorAll(`.menu__btn`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortingBtn = document.querySelector(`.menu__btn--sort`);
const catalog = document.querySelector(`.catalog`);

const FILTERNAME = `filter`;
const SORTINGNAME = `sort-list`;

const distanceFromMenuToTop = menu.offsetTop;

// Toggle catalog's top margin
const toggleCatalogMargin = (isMargin) => {
  catalog.style.marginTop = `${isMargin ? `${menu.clientHeight}px` : `0`}`;
};

// Toggle fixed and active state of menu,  toggle filter's and sorting's fixed state
const toggleMenuState = () => {
  if (pageYOffset >= distanceFromMenuToTop) {
    menu.classList.add(`menu--fixed`);
    toggleSelectorsState(`change`, `fixed`);
    toggleCatalogMargin(true);
  } else {
    if (filterBtn.getAttribute(`aria-expanded`) === `true`
      || sortingBtn.getAttribute(`aria-expanded`) === `true`) {
      menu.classList.add(`menu--active`);
    } else {
      menu.classList.remove(`menu--active`);
    }
    menu.classList.remove(`menu--fixed`);
    toggleSelectorsState(`change`, `active`);
    toggleCatalogMargin(false);
  }
};

