const sortingForm = document.querySelector(`.sort-list-form`);

sortingForm.addEventListener(`change`, () => {
  window.renderTemplate(sortData(window.carsDataCopy));
});

const sortData = (data) => {
  const checkedInputId = document.querySelector(`input[name=sort]:checked`).id;
  data.sort((a, b) => {
    switch (checkedInputId) {
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
  return data;
};

window.sortData = sortData;
