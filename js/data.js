const data = [
  {
    id: 1,
    brand: `BMW`,
    model: `5 series`,
    minPrice: 75000,
    images: [
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`
    ],
    mileage: {
      month: 4000,
      halfYear: 25000,
      year: 60000
    },
    characteristics: {
      type: `sedan`,
      engine: `diesel`,
      power: 250
    }
  },
  {
    id: 2,
    brand: `Audi`,
    model: `A5`,
    minPrice: 480980,
    images: [
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`,
      `./img/car-bmw.jpg`
    ],
    mileage: {
      month: null,
      halfYear: 256000,
      year: 600860
    },
    characteristics: {
      engine: `electric`,
      power: 300
    }
  },
  {
    id: 3,
    brand: `KIA`,
    model: `Rio`,
    minPrice: 50000,
    images: [
      `./img/car-bmw.jpg`
    ],
    mileage: {
      month: 3208,
      halfYear: 21000,
      year: 50000
    },
    characteristics: {
      type: `coupe`,
      engine: `petrol`,
      power: 230
    }
  }
];

window.data = data;
