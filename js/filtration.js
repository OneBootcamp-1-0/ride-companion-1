// get All forms
const filtersForms = document.querySelectorAll(`.filter-form`);

// Create all filters
const filterByType = (type, arr) => arr.filter((car) => car.characteristics.type === type || type === `car-type-any`);
const filterByPower = (power, arr) => arr.filter((car) => car.characteristics.power >= +power || power === `power-all`);
const filterByFuel = (fuel, arr) => arr.filter((car) => car.characteristics.engine === fuel || fuel === `fuel-all`);
const filterByPrice = (price, arr) => arr.filter((car) => car.minPrice >= price);
const filterByClass = (carClass, arr) => arr.filter((car) => car.class === carClass);

// Do filtration by all the filters, call render func with the filtered data
const filterAll = (data) => {
  let filteredData = data;
  window.carsDataCopy = data;
  const type = document.querySelector(`input[name=type]:checked`).id;
  const power = document.querySelector(`input[name=power]:checked`).id;
  const fuel = document.querySelector(`input[name=fuel]:checked`).id;
  const price = +document.querySelector(`input[name=price]`).value;
  const carClass = document.querySelector(`input[name=class]:checked`).id;

  filteredData = filterByType(type, filteredData);
  filteredData = filterByPower(power, filteredData);
  filteredData = filterByFuel(fuel, filteredData);
  filteredData = filterByPrice(price, filteredData);
  filteredData = filterByClass(carClass, filteredData);
  window.carsDataCopy = filteredData;
  return filteredData;
};

// Do filtration on change of form's inputs
filtersForms.forEach((form) => {
  form.addEventListener(`change`, () => {
    window.renderTemplate(filterAll(window.carsData));
  });
});

window.filterAll = filterAll;
