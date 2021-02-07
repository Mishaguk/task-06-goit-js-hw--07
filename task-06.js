'use strict'
let inputValid = document.getElementById("validation-input");

inputValid.addEventListener('blur', (e) => {
  const totalLength = inputValid.dataset.length;

  if (Number(inputValid.value.length) === Number(totalLength)) {
    inputValid.classList.remove('invalid');
    inputValid.classList.add('valid');
     inputValid.insertAdjacentHTML('afterend', '<div id="valid">Введено 6 символов!</div>');
} if(Number(inputValid.value.length) > Number(totalLength)) {
  inputValid.classList.remove('valid');
    inputValid.classList.add('invalid');
    inputValid.insertAdjacentHTML('afterend', '<div id="invalidBig">Введено <b>больше</b> 6 символов!</div>')
  } if (Number(inputValid.value.length) < Number(totalLength)) {
    inputValid.classList.remove('valid');
    inputValid.classList.add('invalid');
    inputValid.insertAdjacentHTML('afterend', '<div id="invalidBig">Введено <b>меньше</ b> 6 символов!</div>')
  }
});
console.log()