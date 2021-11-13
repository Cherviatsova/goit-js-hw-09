const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

let intervalId = null;

refs.btnStop.setAttribute('disabled', true);

function onBtnStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.setAttribute('disabled', true);
}

function onBtnStopClick() {
  clearInterval(intervalId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}
