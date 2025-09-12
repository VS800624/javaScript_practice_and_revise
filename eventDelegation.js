document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target.id)
    if(e.target.tagName == "li"){
        window.location.href = "/" + e.target.id
    }
})

document.querySelector("#form").addEventListener("keyup", (e) => {
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase()
    }
})


// Benefits of event delegation.
// 1.Less memory usage.
// 2.Mitigates risk of performance bottleneck.
// 3.Instead of writing multiple event listener task can be done in single event listener so writing less code is also a benefit. 
// 4.When elements are dynamically added ,so adding events to the element is slow so event delegation eventually takes care of it.
// Limitation 
// 1.Not all events support event delegation.
// 2.If stopPropogation is used on child elements eventually event delegation would not work.