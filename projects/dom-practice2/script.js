// Ques: Create a page with two images and a button. When the button is clicked, swap the source attribute of the image.

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//   const temp = img1.getAttribute("src")
//   img1.src = img2.getAttribute("src")
//   img2.src = temp
// })
// or
// btn.addEventListener("click", () => {
//   const temp = img1.getAttribute("src")
//   img1.setAttribute("src", img2.getAttribute("src"))
//   img2.setAttribute("src", temp)
// })

//best way
btn.addEventListener("click", ()=>{
  const temp = img1.src
  img1.src = img2.src
  img2.src = temp
})
