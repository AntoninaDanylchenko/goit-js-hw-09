import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const datasForm = { delay: 0, step: 0, amount: 0 };

formEl.addEventListener('input', onInputElements);
formEl.addEventListener('submit', onFormSubmit);

function onInputElements(e) {
  datasForm[e.target.name] = Number(e.target.value);
}

function onFormSubmit(ev) {
  ev.preventDefault();
  let stepPromise = datasForm.delay;

  for (let i = 1; i <= datasForm.amount; i += 1) {
    createPromise(i, stepPromise)
      .then(succes => Notiflix.Notify.success(succes))
      .catch(erroy => Notiflix.Notify.failure(erroy));

    stepPromise += datasForm.step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
