// function outest(){
//     var c = 20
//     function outer(b) {
//     var a = 10
//     function inner(){
//         console.log(a, b, c)
//     }
//     return inner
// }
// return outer
// }

// let a = 100
// var close = outest()("hello")
// close()   // same as outer()()

// // Example of encapsulation

// function counter() {
//     var count = 0
//     function increaseCount(){
//         count++  
//         console.log(count) 
//     }
//     return increaseCount
// }
// var counter1 = counter()
// counter1()
// counter1()

// var counter2 = counter()
// counter2()

function Counter() {
    var count = 0
    this.increaseCounter = function() {
        count++;
        console.log(count)
    }
    this.decreaseCounter = function () {
        count--;
        console.log(count)
    }
}

var counter1 = new Counter()

counter1.increaseCounter()
counter1.increaseCounter()
counter1.decreaseCounter()