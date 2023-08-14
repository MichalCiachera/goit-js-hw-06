const listWithClass = document.querySelectorAll(".item");

const first = listWithClass[0];

const firstList = first.childNodes;

const second = listWithClass[1];

const secondList = second.childNodes;

const third = listWithClass[2];

const thirdList = third.childNodes;

const message = `Number Of categories: ${listWithClass.length}

Category: ${firstList[1].textContent}
Element: ${firstList[3].children.length}

Category: ${secondList[1].textContent}
Element: ${secondList[3].children.length}

Category: ${thirdList[1].textContent}
Element: ${thirdList[3].children.length}`;
console.log(message);
