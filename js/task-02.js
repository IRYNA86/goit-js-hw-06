const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listUl = document.querySelector("#ingredients");
// const listFirst = document.createElement("li");
// listFirst.classList.add('item');
// listFirst.append('Potatoes');
// const listSecond = document.createElement("li");
// listSecond.classList.add('item');
// listSecond.append('Mushrooms',);
// const listThird = document.createElement("li");
// listThird.classList.add('item');
// listThird.append('Garlic',);
// const listFourth = document.createElement("li");
// listFourth.classList.add('item');
// listFourth.append('Tomatos',);
// const listFifth = document.createElement("li");
// listFifth.classList.add('item');
// listFifth.append('Herbs',);
// const listSixth = document.createElement("li");
// listSixth.classList.add('item');
// listSixth.append('Condiments',);
// listUl.prepend(listFirst, listSecond, listThird, listFourth, listFifth, listSixth);
// console.log(listUl);
const list = ingredients.map((ingredient) => {
  const li = document.createElement("li");
    li.textContent = ingredient;
  li.classList.add('item');
  return li;
})
listUl.append(...list);
console.log(listUl);