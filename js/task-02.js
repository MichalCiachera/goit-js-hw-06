const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parent = document.querySelector("#ingredients");

const newElements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = ingredients[i];
  newElements.push(newElement);
}
parent.append(...newElements);
