let add = document.querySelector('button[data-action="increment"]');
let subract = document.querySelector('button[data-action="decrement"]');

add.addEventListener("click", function () {
  let value = document.querySelector("#value");
  let result = Number(value.innerText) + 1;

  if (result > Infinity) {
    result = 0;
  }

  value.innerText = result;
});

subract.addEventListener("click", function () {
  let value = document.querySelector("#value");
  let result = Number(value.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  value.innerText = result;
});
