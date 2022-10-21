// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates.length > 0) {
      const selectedTime = selectedDates[0].getTime();

      if (selectedTime < isTodaySek) {
        Notiflix.Report.warning(
          'Warning',
          'Please choose a date in the future'
        );
      } else {
        startBtnEl.disabled = false;
        timerTime = selectedTime - isTodaySek;
        return timerTime;
      }
    }
  },
};

const myInput = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const dataSpanEl = document.querySelectorAll('.value');

const isToday = new Date();
const isTodaySek = isToday.getTime();

let timerTime = 0;

flatpickr(myInput, options);

startBtnEl.disabled = true;
startBtnEl.addEventListener('click', onStartTimerBtnClick);

function onStartTimerBtnClick() {
  if (timerTime < 0) {
    console.log('timerTime < 0');
    return;
  }
  startBtnEl.disabled = true;
  const timmerObj = convertMs(timerTime);
  const timmerArray = Object.values(timmerObj);
  console.log(timmerArray[2].length);

  for (let i = 0; i < 4; i += 1) {
    dataSpanEl[i].textContent = timmerArray[i];
    //   timmerArray[i].toString.length < 2
    //     ? `0${timmerArray[i]}`
    //     : timmerArray[i];
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
