const sortData = (data, value) => {
  data.sort((a, b) => {
    switch (value) {
      case `expensive`: return b.minPrice - a.minPrice;
      case `cheap`: return a.minPrice - b.minPrice;
      case `economic`: return a.characteristics.power - b.characteristics.power;
      case `powerful`: return b.characteristics.power - a.characteristics.power;
      case `recommended`:
      default: return a.id - b.id;
    }
  });
  return data;
};

window.sortData = sortData;
