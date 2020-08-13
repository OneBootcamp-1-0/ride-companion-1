const menu = document.querySelector(`.menu`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortingBtn = document.querySelector(`.menu__btn--sort`);
const menuBtns = [filterBtn, sortingBtn];
const catalog = document.querySelector(`.catalog`);

const FILTER_NAME = `filter`;
const SORTING_NAME = `sort-list`;

const distanceFromMenuToTop = menu.offsetTop;

// Toggle catalog's top margin
const toggleCatalogMargin = (isMargin) => {
  catalog.style.marginTop = `${isMargin ? `${menu.clientHeight}px` : 0}`;
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

// toggle btn's active state, close/open filter and sorting blocks
const toggleSelectors = (e) => {
  const clickedBtn = e.target.closest(`.menu__btn`);

  if (!clickedBtn) {
    return;
  }

  menuBtns.forEach((btn) => {
    if (btn.getAttribute(`aria-label`) === clickedBtn.getAttribute(`aria-label`)) {
      let isExpanded = btn.getAttribute(`aria-expanded`);

      btn.classList.toggle(`menu__btn--active`);

      isExpanded = isExpanded === `true` ? `false` : `true`;

      btn.setAttribute(`aria-expanded`, isExpanded);
    } else {
      btn.classList.remove(`menu__btn--active`);
      btn.setAttribute(`aria-expanded`, `false`);
    }
  });

  toggleSelectorsState(`close`);

  if (clickedBtn.classList.contains(`menu__btn--filter`)) {
    setSelectorState(`${clickedBtn.getAttribute(`aria-expanded`) === `true` ? `open` : `close`}`, filter, FILTER_NAME);
  } else if (clickedBtn.classList.contains(`menu__btn--sort`)) {
    setSelectorState(`${clickedBtn.getAttribute(`aria-expanded`) === `true` ? `open` : `close`}`, sorting, SORTING_NAME);
  }
};

// Do different actions with blocks passed in the params
const setSelectorState = (action, block, blockName, state) => {
  switch (action) {
    case `change`: {
      if (state === `fixed`) {
        block.classList.add(`${blockName}--fixed`);
      } else {
        block.classList.remove(`${blockName}--fixed`);
      }
      break;
    }
    case `open`: {
      block.style.display = `grid`;
      break;
    }
    case `close`:
    default: {
      block.style.display = `none`;
    }
  }
};

// Do actions passed in params with both filter and sorting blocks
const toggleSelectorsState = (action, state) => {
  setSelectorState(action, filter, FILTER_NAME, state);
  setSelectorState(action, sorting, SORTING_NAME, state);
};

window.addEventListener(`scroll`, toggleMenuState);

menu.addEventListener(`click`, (e) => {
  toggleSelectors(e);
  toggleMenuState();
});
