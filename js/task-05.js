const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    spanEl.textContent = event.currentTarget.value;
    if(inputEl.value === '') {
    spanEl.innerHTML = 'Anonymous';
} else
{ spanEl.innerHTML = inputEl.value }
});

  
    


    