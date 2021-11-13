import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
};

const onFormInput = evt => {
  evt.preventDefault();
  makePromise();
};

refs.form.addEventListener('submit', onFormInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const makePromise = () => {
  let delayEl = Number(refs.inputDelay.value);
  let stepEl = Number(refs.inputStep.value);
  let amountEl = Number(refs.inputAmount.value);

  for (let i = 1; i <= amountEl; i++) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
};
