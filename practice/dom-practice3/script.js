// Ques: Create a form with input fields and a submit button. Use JS to validate the form and display an error message if the input is invalid.

// jab bhi forms ke saath deal karo tho yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai hai ke pages reload na ho, nahito agar page reloadhua to  js run hone se pahle hi page reload ho jayega 
// or
// By default, a form reloads the page when it is submitted. To run JavaScript properly, you need to prevent this reload; otherwise, the page refreshes before the JS code runs.

// event.preventDefault() is used to prevent the default action of a form submission, so the page does not reload and JavaScript can run properly.

const form = document.querySelector("#form")
const inps = document.querySelectorAll('input[type="text"]')
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const p = document.querySelector("#error")

const nameRegex = /^[A-Za-z]+$/

form.addEventListener("submit", (e) => {
  e.preventDefault()
  // if(lname.value!== typeof "String" || fname.value !== typeof "String"){   -> this is wrong
  //   // throw new Error("Name should be string")
  //   p.textContent = "Input is invalid"
  // }   

    // if (fname.value.trim() === "" || lname.value.trim() === "") {
  //   p.textContent = "Input is invalid";
// }
  
  if(!nameRegex.test(fname.value) || !nameRegex.test(lname.value)){
    // throw new Error("Name should be string")
    p.textContent = "Input is invalid"
    p.style.color = "red"
  }
  
})


// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let isValid = true;

//   inps.forEach((input) => {
//     if (!nameRegex.test(input.value)) {
//       isValid = false;
//     }
//   });

//   if (!isValid) {
//     p.textContent = "Input is invalid";
//     p.style.color = "red";
//   } else {
//     p.textContent = "Form submitted successfully";
//     p.style.color = "green";
//   }
// });
