// Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.

const progress = document.querySelector("#progress")
const h3 = document.querySelector("h3")

count = 0

const int = setInterval(() => {
  if(count === 100){
    clearInterval(int)
    h3.style.opacity = 1
  }
count++
progress.style.width = count+"%"
},100)
