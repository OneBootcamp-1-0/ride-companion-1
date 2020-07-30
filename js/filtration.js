const carTypeBtns = document.querySelectorAll(`input[name=car-type]`);
const carPowerBtns = document.querySelectorAll(`input[name=power]`);
const carFuelBtns = document.querySelectorAll(`input[name=fuel]`);
const carPriceInput = document.querySelector(".filter-price__input");
const carPriceSlider = document.querySelector(".slider");

let carTypeActiveOption = `car-type-any`;
let carPowerActiveOption = `power-all`;
let carEngineActiveOption = `fuel-all`;
let carPrice = carPriceInput.value;

const filterData = () => data.filter((car) => {
    if(car.characteristics.type === carTypeActiveOption || carTypeActiveOption === `car-type-any`) {
        return true
    }
  })
  .filter((car) => {
    if(car.characteristics.power >= carPowerActiveOption || carPowerActiveOption === `power-all`) {
      return true
    }
  })
  .filter((car) => {
    if(car.characteristics.engine === carEngineActiveOption || carEngineActiveOption === `fuel-all`) {
      return true
    }
  })
  .filter((car) => {
    if(car.minPrice >= carPrice) {
      return true
    }
  })

carTypeBtns.forEach((item) => {
  item.addEventListener(`click`, () => {
    carTypeActiveOption = item.id;
    renderTemplate(filterData())
  });
});

carPowerBtns.forEach((item) => {
  item.addEventListener(`click`, () => {
    carPowerActiveOption = item.id;
    renderTemplate(filterData())
  });
});

carFuelBtns.forEach((item) => {
  item.addEventListener(`click`, () => {
    carEngineActiveOption = item.id;
    renderTemplate(filterData())
  });
});

carPriceSlider.addEventListener(`input`, () => {
  carPrice = carPriceInput.value;
  renderTemplate(filterData())
});

carPriceInput.addEventListener(`input`, () => {
  carPrice = carPriceInput.value;
  renderTemplate(filterData())
});