const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

btnStopEl.disabled = true;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  e.preventDefault();
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  timerId = setInterval(() => {
    const colorBackgroundBody = getRandomHexColor();
    bodyEl.style.backgroundColor = colorBackgroundBody;
  }, 1000);
}

function onBtnStopClick(e) {
  e.preventDefault();
  clearInterval(timerId);

  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
