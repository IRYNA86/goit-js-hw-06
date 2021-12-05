const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const lengthInputEl = inputEl.dataset.length;
console.log(lengthInputEl);
inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);
function onInputFocus() {
    console.log('Инпут получил фокус');  
};
function onInputBlur(event) {
   if(event.currentTarget.value.length == lengthInputEl){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}