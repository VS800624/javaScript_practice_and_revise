
let count = 0
// function increase (){
//   count++
//   document.getElementById("count").innerText = count
//   // document.querySelector(".count").innerText = count
// }

// function decrease(){
//   count--
//   document.getElementById("count").innerText = count
// }

// function reset(){
//   count = 0
//   document.getElementById("count").innerText = count
// }



const display = document.querySelector("#count")
const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")
const resBtn = document.querySelector("#res")

incBtn.addEventListener("click", () => {
  count++
  display.innerText = count
})

decBtn.addEventListener("click", () => {
//   if(count <1) {
//   count = 1
// }
  count--
  display.innerText = count
})

resBtn.addEventListener("click", () => {
  count = 0
  display.innerText = count
})

