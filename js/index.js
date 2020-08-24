
const dataURL = `/data.json`;

const {renderElement, createElement} = window.utils;

const container = document.querySelector(`.catalog`);
const loadingAlert = document.querySelector(`.loading-notification`);
const sortingForm = document.querySelector(`.sort-list-form`);
const filtersForms = document.querySelectorAll(`.filter-form`);

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

const makeImages = (images, imgAlt) => images.map((url) =>
  `<img src="${url}" class="carousel__img" alt="${imgAlt}">`
).join(``);

const createCarouselElement = (images, imgAlt) => `<div class="carousel">
  <div class="carousel__list carousel__list--scroll">
    ${makeImages(images, imgAlt)}
  </div>
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

const makeCarsRendered = (data) => {
  container.textContent = ``;

  const filteredData = window.filterAll(
      data,
      document.querySelector(`input[name=type]:checked`).id,
      document.querySelector(`input[name=power]:checked`).id,
      document.querySelector(`input[name=fuel]:checked`).id,
      +document.querySelector(`input[name=price]`).value,
      document.querySelector(`input[name=class]:checked`).id
  );

  if (!filteredData.length) {
    renderElement(container, (createElement(`<section class="error-notification notification alert">
      <h2 class="error-notification__title">¯\\_(ツ)_/¯ Слишком строгие фильтры</h2>
      <p class="notification__description">Под выбранные условия не подходит ни один автомобиль. Попробуйте смягчить условия или <button class="filter-notification__btn">отменить последний фильтр</button></p>
    </section>`)));
    return;
  }

  const sortedData = window.sortData(filteredData, document.querySelector(`input[name=sort]:checked`).id);

  sortedData.forEach((element) => {
    const html = createElement(createCarElement(element));
    renderElement(container, html);
  });

  const carousels = document.querySelectorAll(`.carousel`);

  carousels.forEach((element) => {
    new window.Carousel(element).init();
  });
};

window.getData(dataURL)
  .then((data) => {
    loadingAlert.remove();
    makeCarsRendered(data);
    window.data = data;
  })
  .catch(() => {
    loadingAlert.remove();
    container.before(createElement(`<section class="error-notification notification alert">
    <h2 class="error-notification__title">¯\\_(ツ)_/¯ Что-то пошло не так</h2>
    <p class="notification__description">Попробуйте перезагрузить сайт</p>
  </section>`));
  });

filtersForms.forEach((form) => {
  form.addEventListener(`change`, () => {
    makeCarsRendered(window.data);
  });
});

sortingForm.addEventListener(`change`, () => {
  makeCarsRendered(window.data);
});

window.addEventListener(`offline`, () => {
  container.before(createElement(`<section class="offline-notification notification">
  <h3 class="offline-notification__title">📴 Офлайн</h3>
  <p class="notification__description">Кажется, вы не подключены к интернету. Проверьте подключение к вайфаю или к сети.</p>
</section>`));
});

window.addEventListener(`online`, () => {
  document.querySelector(`.offline-notification`).remove();
});
