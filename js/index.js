const container = document.querySelector(`.catalog`);
const loading = document.querySelector(`.loading-notification`);
const offlineNotification = `<section class="offline-notification notification">
  <h3 class="offline-notification__title">📴 Офлайн</h3>
  <p class="notification__description">Кажется, вы не подключены к интернету.<br>Проверьте подключение к вайфаю или к сети.</p>
</section>`;

const characteristicsRu = {
  type: {
    any: `любой`,
    sedan: `седан`,
    estate: `универсал`,
    hatchback: `хэтчбек`,
    suv: `внедорожник`,
    coupe: `купе`,
    cabriolet: `кабриолет`
  },
  engine: {
    all: `все`,
    gas: `бензин`,
    diesel: `дизель`,
    electric: `электро`
  }
};

const makeImages = (images, imgAlt) => images.map((url, i) =>
  `<img src="${url}" data-i="${i + 1}" class="${images.length === 1 ? `carousel__img--single` : `carousel__img`}" alt="${imgAlt}" height="135px" width="255px">`
).join(``);

const createCarouselElement = (images, imgAlt) => `<div class="carousel">
  <div data-translate="${-224}" class="${images.length === 1 ? `carousel__list carousel__list--single` : `carousel__list`}">
    ${makeImages(images, imgAlt)}
  </div>
  ${images.length === 1 ? `` : `<button class="carousel__btn carousel__btn--left" type="button" aria-label="предыдущий слайд">
    <svg class="carousel__arrow" width="18" height="82" viewBox="0 0 18 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
      <line x1="15.9391" y1="0.343582" x2="0.939123" y2="41.3436" stroke-width="2"/>
      <line x1="16.0626" y1="81.343" x2="1.0592" y2="40.3443" stroke-width="2"/>
    </svg>
  </button>
  <button class="carousel__btn carousel__btn--right" type="button" aria-label="следующий слайд">
    <svg class="carousel__arrow" width="17" height="82" viewBox="0 0 17 82" fill="white"  stroke="#E0E0E0" xmlns="http://www.w3.org/2000/svg">
      <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343547 0.939135 0.93911 -0.343616 2.0016 0)" stroke-width="2"/>
      <line y1="-1" x2="43.6575" y2="-1" transform="matrix(0.343625 -0.939107 -0.939082 -0.343694 0.000106812 81)" stroke-width="2"/>
    </svg>
  </button>`}
</div>`;

const createCarElement = ({brand, model, images, minPrice, mileage, characteristics}) => `<article class="catalog-item">
  <h3 class="catalog-item__title"><a href="#">${brand} ${model}</a></h3>
  <p class="catalog-item__price">от ${minPrice} ₽ / мес.</p>
  ${createCarouselElement(images, `${brand} ${model}`)}
  <dl class="catalog-item__mileage">
    <dt class="catalog-item__mileage-title">Пробег</dt>
    ${!mileage.month ? `` : `<dd class="catalog-item__milage-tariff">в месяц ${mileage.month} км,</dd>`}
    ${!mileage.halfYear ? `` : `<dd class="catalog-item__milage-tariff">полгода ${mileage.halfYear} км,</dd>`}
    ${!mileage.halfYear ? `` : `<dd class="catalog-item__milage-tariff">год ${mileage.year} км</dd>`}
  </dl>
  <ul class="catalog-item__characteristics">
    ${!characteristics.type ? `` : `<li>${characteristicsRu.type[characteristics.type]}</li>`}
    ${!characteristics.engine ? `` : `<li>${characteristicsRu.engine[characteristics.engine]}</li>`}
    ${!characteristics.power ? `` : `<li>${characteristics.power} л.с.</li>`}
  </ul>
</article>`;

const renderTemplate = (cars) => {
  loading.remove();
  container.textContent = ``;
  if (cars.length === 0) {
    container.textContent = `Слишком строгие фильтры`;
    return;
  }
  const sortedCars = window.sortData(cars);
  sortedCars.forEach((car) => {
    container.innerHTML += createCarElement(car);
  });
  window.callCarousel();
};

window.getData()
  .then((data) => {
    window.carsData = data;
    const filteredData = window.filterAll(data);
    renderTemplate(filteredData);
  })
  .catch(() => {
    if (!navigator.online) {
      container.innerHTML = offlineNotification;
    }
  });

window.renderTemplate = renderTemplate;
