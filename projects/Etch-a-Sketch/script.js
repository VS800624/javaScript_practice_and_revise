const container = document.querySelector("#container")
const input = document.querySelector("#sizeInput")
const resetBtn = document.querySelector("#resetBtn")

resetBtn.addEventListener("click", () => {
  let gridSize = Number(input.value)
  console.log("Grid size: "+gridSize)
  if(!gridSize){
    return alert("The input is empty")
  }
  if(gridSize<0){
    return alert("Grid size cannot be negative")
  }
  if(gridSize>100){
    return alert("Grid size cannot be greater than 100")
  }
  container.innerHTML = ""
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  for(let i =0;  i<gridSize; i++){
    for(let j=0; j<gridSize; j++){
      let square = document.createElement("div")
      square.className = "w-full h-full border"
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
      })
      container.appendChild(square)
    }
  }
})