const filterByType = (type, arr) => arr.filter((car) => car.characteristics.type === type || type === `car-type-any`);
const filterByPower = (power, arr) => arr.filter((car) => car.characteristics.power >= +power || power === `power-all`);
const filterByFuel = (fuel, arr) => arr.filter((car) => car.characteristics.engine === fuel || fuel === `fuel-all`);
const filterByPrice = (price, arr) => arr.filter((car) => car.minPrice >= price);
const filterByClass = (carClass, arr) => arr.filter((car) => car.class === carClass);

const filterAll = (data, type, power, fuel, price, carClass) => {
  let filteredData = data;

  filteredData = filterByType(type, filteredData);
  filteredData = filterByPower(power, filteredData);
  filteredData = filterByFuel(fuel, filteredData);
  filteredData = filterByPrice(price, filteredData);
  filteredData = filterByClass(carClass, filteredData);

  return filteredData;
};

window.filterAll = filterAll;
