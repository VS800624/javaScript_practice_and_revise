const form = document.querySelector("#form")
const nameInput = document.querySelector("#name") 
const emailInput = document.querySelector("#email") 
const passwordInput = document.querySelector("#password") 
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const nameValue = nameInput.value
  const emailValue = emailInput.value
  const passwordValue = passwordInput.value
    // Clear old errors
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  if (nameValue === "") {
    nameError.innerText = "Name is required";
    return;
  }

  if (!emailValue.includes("@")) {
    emailError.innerText = "Email is not valid";
    return;
  }

  if (passwordValue.length <= 3 || passwordValue.length >= 6) {
    passwordError.innerText = "Password must be 4 or 5 characters";
    return;
  }

  alert("Form submitted successfully");
})

