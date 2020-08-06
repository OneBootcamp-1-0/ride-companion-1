const sortingForm = document.querySelector(`.sort-list-form`);

sortingForm.addEventListener(`change`, (e) => {
  window.data.sort((a, b) => {
    switch (e.target.id) {
      case `expensive`: {
        return b.minPrice - a.minPrice;
      }
      case `cheap`: {
        return a.minPrice - b.minPrice;
      }
      case `economic`: {
        return a.characteristics.power - b.characteristics.power;
      }
      case `powerful`: {
        return b.characteristics.power - a.characteristics.power;
      }
      case `recommended`:
      default: {
        return a.id - b.id;
      }
    }
  });
  window.renderTemplate(window.data);
});
