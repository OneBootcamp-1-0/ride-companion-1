const menu = document.querySelector(`.menu-form`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortingBtn = document.querySelector(`.menu__btn--sort`);

const distanceFromMenuToTop = menu.offsetTop;

let activeSelector = null;

const scrollToElem = (elem) => {
  elem.scrollIntoView();
}

const toggleMenuState = () => {
  menu.classList.toggle(`menu--fixed`, pageYOffset >= distanceFromMenuToTop - 1);
};

const openSelector = (block) => {
  block.style.display = `grid`;
};

const closeSelector = (block) => {
  block.style.display = `none`;
};

const activateBtn = (btn) => {
  btn.classList.add(`menu__btn--active`);
  btn.setAttribute(`aria-expanded`, `true`);
};

const unactivateBtn = (btn) => {
  btn.classList.remove(`menu__btn--active`);
  btn.setAttribute(`aria-expanded`, `false`);
};

window.addEventListener(`scroll`, () => {
  toggleMenuState();

  if (activeSelector) {
    const activeBtn = activeSelector === filter ? filterBtn : sortingBtn;

    if (pageYOffset <= distanceFromMenuToTop - 1) {
      closeSelector(activeSelector);
      unactivateBtn(activeBtn);
    } else {
      openSelector(activeSelector);
      activateBtn(activeBtn);
    }
  }
});

const toggleSelectors = (clickedBtn) => {
  const isExpanded = clickedBtn.getAttribute(`aria-expanded`) === `true`;

  const block = clickedBtn === filterBtn ? filter : sorting;

  if (isExpanded) {
    closeSelector(block);
    unactivateBtn(clickedBtn);
    activeSelector = null;
  } else {
    openSelector(block);
    activateBtn(clickedBtn);
    activeSelector = block;
    scrollToElem(menu);
  }

  closeSelector(block === filter ? sorting : filter);
  unactivateBtn(clickedBtn === filterBtn ? sortingBtn : filterBtn);
};

menu.addEventListener(`click`, (e) => {
  const clickedBtn = e.target.closest(`.menu__btn`);

  if (clickedBtn) {
    toggleSelectors(clickedBtn);
  }
});
