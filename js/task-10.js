function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('#controls input'),
  buttonCreate: document.querySelector('#controls button'),
  buttonDestroy: document.querySelector('#controls button + button'),
  divNew: document.querySelector('#boxes'),
};
refs.inputEl.addEventListener('input', createBoxes);
function createBoxes (amount) {
  const inputElNumber = amount.target.value;
  console.log(inputElNumber);
  const createDiv = document.createElement('div');
  createDiv.style.width = '30px';
  createDiv.style.height = '30px';
  console.log(createDiv);
  refs.divNew.prepend(createDiv);
};
function onChangeColorNewDiv () {
  createDiv.style.backgroundColor = getRandomHexColor();
};
console.log(createDiv);
