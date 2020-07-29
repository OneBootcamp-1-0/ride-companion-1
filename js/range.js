const slider = document.querySelector(".slider");
const knob = document.querySelector(".slider__knob")

const sliderInit = () => {
  const valueMin = 5000;
  const valueMax = 480000;
  const valueNow = 10000;

  if (slider.getAttribute('aria-valuemin')) {
    valueMin = +slider.getAttribute('aria-valuemin');
  }
  if (slider.getAttribute('aria-valuemax')) {
    valueMax = +slider.getAttribute('aria-valuemax');
  }
  if (slider.getAttribute('aria-valuenow')) {
    valueNow = +slider.getAttribute('aria-valuenow');
  }
}


