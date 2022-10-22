// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates.length > 0) {
      selectedTime = selectedDates[0].getTime();

      if (selectedTime < isTodaySek) {
        Notiflix.Notify.failure('Please choose a date in the future');
      } else {
        startBtnEl.disabled = false;
        return selectedTime;
      }
    }
  },
};

const myInput = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const dataSpanEl = document.querySelectorAll('.value');
let isToday = new Date();
let isTodaySek = isToday.getTime();
let timerTime = 0;

fp = flatpickr(myInput, options);

startBtnEl.disabled = true;
startBtnEl.addEventListener('click', onStartTimerBtnClick);

function onStartTimerBtnClick() {
  startBtnEl.disabled = true;

  const timerIdTwo = setInterval(() => {
    if (timerTime < 0) {
      Notiflix.Notify.success('Huraaay! Time is out!');
      window.clearInterval(timerIdTwo);
      return;
    }
    findsTimeDifference();
  }, 1000);
}

function findsTimeDifference() {
  isToday = new Date();
  isTodaySek = isToday.getTime();
  timerTime = selectedTime - isTodaySek;
  if (timerTime < 0) {
    return timerTime;
  }
  const timmerArray = Object.values(convertMs(timerTime));

  for (let i = 0; i < 4; i += 1) {
    dataSpanEl[i].textContent = addLeadingZero(timmerArray)[i];
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(array) {
  return array.map(value =>
    value.toString().length < 2 ? value.toString().padStart(2, '0') : value
  );
}
