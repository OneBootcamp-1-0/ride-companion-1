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

