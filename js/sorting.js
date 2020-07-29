const radioButtons = document.querySelectorAll(`input[name=sort]`);

radioButtons.forEach( (button) => {
  button.addEventListener(`click`, () => {
    switch (button.id) {
      case `recommended`: {
        renderTemplate(data);
        break;
      }
      case `expensive`: {
        const newData = [...data];
        newData.sort( (a, b) => {
          return b.minPrice-a.minPrice;
        });
        renderTemplate(newData);
        break;
      }
      case `cheap`: {
        const newData = [...data];
        newData.sort( (a, b) => {
          return a.minPrice-b.minPrice;
        });
        renderTemplate(newData);
        break;
      }
      case `economic`: {
        const newData = [...data];
        newData.sort( (a, b) => {
          return a.characteristics.power-b.characteristics.power;
        });
        renderTemplate(newData);
        break;
      }
      case `powerful`: {
        const newData = [...data];
        newData.sort( (a, b) => {
          return b.characteristics.power-a.characteristics.power;
        });
        renderTemplate(newData);
        break;
      }
      default:
        return;
    }
  })
})
