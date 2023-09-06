const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function () {
  const expectedLength = Number(validationInput.getAttribute("data-length"));
  const currentLength = validationInput.value.length;

  if (currentLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
