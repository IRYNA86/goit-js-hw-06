function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonEl: document.querySelector('.change-color'),
  spanEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onChangeColorBody);
function onChangeColorBody() {
  let colorFunction = getRandomHexColor();
  document.body.style.backgroundColor = colorFunction;
  refs.spanEl.textContent = colorFunction;
};

// function onChangeColorBody () {
//   document.body.style.backgroundColor = getRandomHexColor();
// };
// function onWriteSpanColorBody () {
//   refs.spanEl.textContent = getRandomHexColor();
// };
// refs.buttonEl.addEventListener('click', onChangeColorBody);
// refs.buttonEl.addEventListener('click', onWriteSpanColorBody);