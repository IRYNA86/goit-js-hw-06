function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector('#controls input'),
  buttonCreate: document.querySelector('#controls button'),
  buttonDestroy: document.querySelector('#controls button + button'),
  divNew: document.querySelector('#boxes'),
};
const createBoxes = amount => {
  let sizeDiv = 30;
  let arrayBox = [];
  arrayBox.length = amount;
  arrayBox.fill('');
  
  const markUp = arrayBox.map(createDiv => {
    createDiv = document.createElement('div');
    createDiv.style.backgroundColor = `${getRandomHexColor()}`;
    createDiv.style.width = `${sizeDiv}px`;
    createDiv.style.height = `${sizeDiv}px`;
    sizeDiv += 10;
    refs.divNew.prepend(createDiv);
  });
  };

const createBox = () => {
  const amount = refs.inputEl.value;
  createBoxes(amount);
};
refs.buttonCreate.addEventListener('click', createBox);

const destroyBoxes = () => {
  refs.divNew.innerHTML = '';
  refs.inputEl.value = '';
};
refs.buttonDestroy.addEventListener('click', destroyBoxes);




// let sizeDiv = 30;

// refs.buttonCreate.addEventListener('click', createBoxes);

// function createBoxe () {
    
//   const createDiv = document.createElement('div');
//   createDiv.style.width = `${sizeDiv}px`;
//   createDiv.style.height = `${sizeDiv}px`;
//   sizeDiv += 10;
 
//   refs.divNew.prepend(createDiv);

//   createDiv.style.backgroundColor = `${getRandomHexColor()}`;
// console.log(createDiv);
  

// };
// function createBoxes() {
//   const inputElNumber = refs.inputEl.value;
  
  
//   createBoxe(inputElNumber);
// }
  

 
// const destroyBoxes = () => { refs.divNew.innerHTML = ' '; };
// refs.buttonDestroy.addEventListener('click', destroyBoxes)


 
