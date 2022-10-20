refs = {
  btnStartEl: document.querySelector('[data-start]'),
  btnStopEl: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};
let timerId = null;

refs.btnStopEl.disabled = true;

refs.btnStartEl.addEventListener('click', onBtnStartClick);
refs.btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  e.preventDefault();
  refs.btnStartEl.disabled = true;
  refs.btnStopEl.disabled = false;
  timerId = setInterval(() => {
    const colorBackgroundBody = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = colorBackgroundBody;
  }, 1000);
}

function onBtnStopClick(e) {
  e.preventDefault();
  clearInterval(timerId);

  refs.btnStartEl.disabled = false;
  refs.btnStopEl.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
