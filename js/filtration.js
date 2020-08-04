const carClassForm = document.querySelector(`.menu`);
const carTypeForm = document.querySelector(`.filter__form-type`);
const carPowerForm = document.querySelector(`.filter__form-power`);
const carEngineForm = document.querySelector(`.filter__form-engine`);
const carPriceForm = document.querySelector(`.filter__form-price`);

let carClassActiveOption = document.querySelector(`input[name="menu"][checked]`).id;
let carTypeActiveOption = document.querySelector(`input[name="car-type"][checked]`).id;
let carPowerActiveOption = document.querySelector(`input[name="power"][checked]`).id;
let carEngineActiveOption = document.querySelector(`input[name="fuel"][checked]`).id;
let carPrice = document.querySelector(`input[id="slider"]`).value;

const filterData = () => window.data.filter((car) => {
  if ((car.class === carClassActiveOption)
  && (car.characteristics.type === carTypeActiveOption || carTypeActiveOption === `car-type-any`)
  && (car.characteristics.power >= carPowerActiveOption || carPowerActiveOption === `power-all`)
  && (car.characteristics.engine === carEngineActiveOption || carEngineActiveOption === `fuel-all`)
  && car.minPrice >= carPrice) {
    return true;
  }
  return ``;
});

carClassForm.addEventListener(`change`, (e) => {
  carClassActiveOption = e.target.id;
  window.renderTemplate(filterData());
});

carTypeForm.addEventListener(`change`, (e) => {
  carTypeActiveOption = e.target.id;
  window.renderTemplate(filterData());
});

carPowerForm.addEventListener(`change`, (e) => {
  carPowerActiveOption = e.target.id;
  window.renderTemplate(filterData());
});

carEngineForm.addEventListener(`change`, (e) => {
  carEngineActiveOption = e.target.id;
  window.renderTemplate(filterData());
});

carPriceForm.addEventListener(`change`, (e) => {
  carPrice = e.target.value;
  window.renderTemplate(filterData());
});

window.renderTemplate(filterData());
