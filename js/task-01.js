const listWithIds = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listWithIds.length}`);
listWithIds.forEach((listWithId) => {
    const listWithTitle = listWithId.querySelector('h2');
    const listUlNumbers = listWithId.querySelectorAll('li');
    console.log(`Category: ${listWithTitle.textContent}`);
    console.log(`Elements: ${listUlNumbers.length}`);
});

// const listWithTitle = document.querySelectorAll("h2");
// const listWithCategories = document.querySelector("#categories");
// // console.log(listWithCategories);
// const listUlOne = listWithCategories.firstElementChild;
// // console.log(listUlOne);
// const listUlFirst = listUlOne.lastElementChild;
// // console.log(listUlFirst);
// const listUlFirstAnimals = listUlFirst.children;
// console.log(`Category: ${listWithTitle[0].textContent}`);
// console.log(`Elements: ${listUlFirstAnimals.length}`);
// const listUlTwo = listUlOne.nextElementSibling;
// // console.log(listUlTwo);
// const listUlSecond = listUlTwo.lastElementChild;
// // console.log(listUlSecond);
// const listUlSecondProducts = listUlSecond.children;
// console.log(`Category: ${listWithTitle[1].textContent}`);
// console.log(`Elements: ${listUlSecondProducts.length}`);
// const listUlThree = listUlTwo.nextElementSibling;
// // console.log(listUlThree);
// const listUlThird = listUlThree.lastElementChild;
// // console.log(listUlThird);
// const listUlThreeTechnologies = listUlThird.children;
// console.log(`Category: ${listWithTitle[2].textContent}`);
// console.log(`Elements: ${listUlThreeTechnologies.length}`)