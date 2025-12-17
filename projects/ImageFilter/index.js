const gallery = document.querySelectorAll(".images")

const tabs = document.querySelector('.tabs')
tabs.addEventListener('click',(e) => {
    console.log(e.target.dataset.category)
    if(e.target.dataset.category !== undefined){
        filterSearch(e.target.dataset.category)
    }
})

const filterSearch = (value) => {
    gallery.forEach((curElem) => {
        console.log(curElem.dataset.category)
        if(curElem.dataset.category === value || value === "all"){
            curElem.style.display = "block"
        }
        else {
            curElem.style.display = "none"
        }
    })
}