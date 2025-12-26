// Create a tabbed interface where clicking on tabs displays different content sections without page reload.

// const home = document.querySelector("#home")
// const about = document.querySelector("#about")
// const contact = document.querySelector("#contact")

// const homeText = document.querySelector("#hometext")
// const aboutText = document.querySelector("#abouttext")
// const contactText = document.querySelector("#contacttext")


// home.addEventListener("click", () => {
//   sareTextHatao()
//   homeText.style.display = "block"
//   homeText.style.width = "50%"
// })

// about.addEventListener("click", () => {
//   sareTextHatao()
//   aboutText.style.display = "block"
//   aboutText.style.width = "50%"
// })

// contact.addEventListener("click", () => {
//   sareTextHatao()
//   contactText.style.display = "block"
//   contactText.style.width = "50%"
// })  

// function sareTextHatao(){
//   document.querySelectorAll("h3").forEach((h3) => {
//     h3.style.display = "none"
//   })
// }

// optimizing it

const divs = document.querySelectorAll(".tab")
const texts = document.querySelectorAll("h3")

texts[0].style.display = "block"
texts[0].style.width = "50%"

divs.forEach((div,index) => {
  div.addEventListener("click" , () => {
    hideAllText()
    texts[index].style.display = "block"
    texts[index].style.width = "50%"
  })
})

function hideAllText() {
  texts.forEach((text) => {
    text.style.display = "none"
  })
}
