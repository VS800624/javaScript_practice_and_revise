// function x() {
//     var a = 7;
//     function y() {
//         console.log(a)
//     }
//     a = 100
//     return y
// }
// var z = x()
// console.log(z)

// z();

// function z() {
//     var b = 9
//     function x() {
//     var a = 7;
//     function y() {
//         console.log(a, b)
//     }
//     y()
//     // a = 100
//     // return y
// }
// x()
// }
// z()

// function x() {
//     for (var i =1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i)
//         },i * 1000)
//     }
//     console.log("Namaste JS")
// }
// x();

// function x() {
//     for (let i =1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i)
//         },i * 1000)
//     }
//     console.log("Namaste JS")
// }
// x();

// function x() {
//     for (var i =1; i<=5; i++) {
//         function close(x){
//             setTimeout(function() {
//                 console.log(x)
//             },x * 1000)
//         }
//         close(i);
//     }
//     console.log("Namaste JS")
// }
// x();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         (function(x) {
//             setTimeout(function() {
//                 console.log(x)
//             }, x * 1000)
//         })(i);
//     }
//     console.log("Namaste JS")
// }
// x();

