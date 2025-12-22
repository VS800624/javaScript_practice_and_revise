// Create an unordered list. Allow users to add and remove list items dynamically using buttons

const ul = document.querySelector("ul")
const input = document.querySelector("input")
const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")


addBtn.addEventListener("click", () => {
  if(input.value.trim() === "") return
  const li = document.createElement("li")
  li.textContent = input.value
  // console.log(li)
  ul.appendChild(li)
  input.value = ""
})

removeBtn.addEventListener("click", () => {
  if(ul.children.length === 0) return
  ul.removeChild(ul.lastElementChild)
})