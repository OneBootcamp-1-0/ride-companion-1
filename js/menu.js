const menu = document.querySelector(`.menu-form`);
const filter = document.querySelector(`.filter`);
const sorting = document.querySelector(`.sort-list`);
const filterBtn = document.querySelector(`.menu__btn--filter`);
const sortingBtn = document.querySelector(`.menu__btn--sort`);

const distanceFromMenuToTop = menu.offsetTop;

let activeBlock = null;

const scrollToElem = (elem) => {
  elem.scrollIntoView();
};

const toggleMenuState = () => {
  menu.classList.toggle(`menu--fixed`, pageYOffset >= distanceFromMenuToTop - 1);
};

const openBlock = (block) => {
  block.style.display = `grid`;
};

const closeBlock = (block) => {
  block.style.display = `none`;
};

const activateBtn = (btn) => {
  btn.classList.add(`menu__btn--active`);
  btn.setAttribute(`aria-expanded`, `true`);
};

const inactivateBtn = (btn) => {
  btn.classList.remove(`menu__btn--active`);
  btn.setAttribute(`aria-expanded`, `false`);
};

window.addEventListener(`scroll`, () => {
  toggleMenuState();

  if (activeBlock) {
    const activeBtn = activeBlock === filter ? filterBtn : sortingBtn;

    if (pageYOffset <= distanceFromMenuToTop - 1) {
      closeBlock(activeBlock);
      inactivateBtn(activeBtn);
    } else {
      openBlock(activeBlock);
      activateBtn(activeBtn);
    }
  }
});

const toggleBlocks = (clickedBtn) => {
  const isExpanded = clickedBtn.getAttribute(`aria-expanded`) === `true`;

  const block = clickedBtn === filterBtn ? filter : sorting;

  if (isExpanded) {
    closeBlock(block);
    inactivateBtn(clickedBtn);
    activeBlock = null;
    return;
  }

  openBlock(block);
  activateBtn(clickedBtn);
  
  activeBlock = block;

  if (pageYOffset <= distanceFromMenuToTop) {
    scrollToElem(menu);
  }

  closeBlock(block === filter ? sorting : filter);
  inactivateBtn(clickedBtn === filterBtn ? sortingBtn : filterBtn);
};

menu.addEventListener(`click`, (e) => {
  const clickedBtn = e.target.closest(`.menu__btn`);

  if (clickedBtn) {
    toggleBlocks(clickedBtn);
  }
});
