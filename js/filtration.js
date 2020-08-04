const carClassForm = document.querySelector(`.menu`);
const carTypeForm = document.querySelector(`.filter__form-type`);
const carPowerForm = document.querySelector(`.filter__form-power`);
const carEngineForm = document.querySelector(`.filter__form-engine`);
const carPriceForm = document.querySelector(`.filter__form-price`);

let carClassActiveOption = `economy`;
let carTypeActiveOption = `car-type-any`;
let carPowerActiveOption = `power-all`;
let carEngineActiveOption = `fuel-all`;
let carPrice = 5000;

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
