// Ques: Create a html page with button. When the button is clicked, change the text of a paragraph element.

const btn = document.querySelector(".button")
const paragraph = document.querySelector(".p")
const input  = document.querySelector(".input")
const p = document.querySelector(".input-para")

let count = 0
const messages = ["Hello", "Hi", "Welcome", "Good Morning"]

btn.addEventListener("click", () => {
  // paragraph.innerText = "Hello World"
  if(!input.value.trim()){
    p.textContent = "Please enter some value"
    return 
  }
    p.textContent = input.value
  
  count++
  const randomIndex = Math.floor(Math.random() * messages.length)
  paragraph.textContent = `${messages[randomIndex]} Clicked ${count} times`
})




// Use textContent → when you want speed and raw text (most cases)
// Use innerText → when you care about what the user actually sees
