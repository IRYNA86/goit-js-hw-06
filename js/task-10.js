function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('#controls input'),
  buttonCreate: document.querySelector('#controls button'),
  buttonDestroy: document.querySelector('#controls button + button'),
  divNew: document.querySelector('#boxes'),
};
let sizeDiv = 30;

refs.buttonCreate.addEventListener('click', createBoxes);

function createBoxes () {
 
    const inputElNumber = refs.inputEl.value;
  
  
  console.log(inputElNumber);
  const createDiv = document.createElement('div');
  createDiv.style.width = `${sizeDiv}px`;
  createDiv.style.height = `${sizeDiv}px`;
  sizeDiv += 10;
  createDiv.classList.add('create')
  refs.divNew.prepend(createDiv);

  createDiv.style.backgroundColor = `${getRandomHexColor()}`;
console.log(createDiv);
  

};

  

 
const destroyBoxes = () => { refs.divNew.innerHTML = ' '; };
refs.buttonDestroy.addEventListener('click', destroyBoxes)


 
