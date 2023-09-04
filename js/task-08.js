const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be completed");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    registerForm.reset();
  }
});
