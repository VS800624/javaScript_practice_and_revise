// Build a countdown timer that starts when a button is clicked and updates the display in real-time.

const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const resetBtn = document.querySelector(".reset")
const h2 = document.querySelector("h2")

let count = 0
let intervalId;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
      h2.textContent = count
      count++
      console.log(count)
},1000)
})

stopBtn.addEventListener("click", () =>{
  clearInterval(intervalId)   // stop interval
})

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId)  //stop interval
  intervalId = null       //allow restart
  count = 0             //reset value
  h2.textContent = count     //update UI
})