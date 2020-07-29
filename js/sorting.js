const radioButtons = document.querySelectorAll(`input[name=sort]`);
const newData = [...data];

radioButtons.forEach( (button) => {
  button.addEventListener(`click`, () => {
    switch (button.id) {
      case `expensive`: {
        newData.sort( (a, b) => {
          return b.minPrice-a.minPrice;
        });
        break;
      }
      case `cheap`: {
        newData.sort( (a, b) => {
          return a.minPrice-b.minPrice;
        });
        break;
      }
      case `economic`: {
        newData.sort( (a, b) => {
          return a.characteristics.power-b.characteristics.power;
        });
        break;
      }
      case `powerful`: {
        newData.sort( (a, b) => {
          return b.characteristics.power-a.characteristics.power;
        });
        break;
      }
      default:
        renderTemplate(data);
    }
    if (button.id !== `recommended`) {
      renderTemplate(newData);
    }
  })
})
