const carTypeForm = document.querySelector(`.filter__form-type`);
const carPowerForm = document.querySelector(`.filter__form-power`);
const carEngineForm = document.querySelector(`.filter__form-engine`);
const carPriceForm = document.querySelector(".filter__form-price");

let carTypeActiveOption = `car-type-any`;
let carPowerActiveOption = `power-all`;
let carEngineActiveOption = `fuel-all`;
let carPrice;

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

  carTypeForm.addEventListener(`change`, (e) => {
    carTypeActiveOption = e.target.id;
    renderTemplate(filterData());
  });

  carPowerForm.addEventListener(`change`, (e) => {
    carPowerActiveOption = e.target.id;
    renderTemplate(filterData());
  });

  carEngineForm.addEventListener(`change`, (e) => {
    carEngineActiveOption = e.target.id;
    renderTemplate(filterData());
  });

carPriceForm.addEventListener(`change`, (e) => {
  carPrice = e.target.value;
  renderTemplate(filterData());
});
