// Q) Guess the output

// var x=20 
// function foo(){
// console.log(x)
// var x=10
// }
// foo()
// ans undefined 
// and if x is changed to let their will be the error

// Q) the order in which it will run?
// console.log('Start')
// setTimeout(()=>{
// console.log('timeout')
// },0)
// console.log('End')

// first the start , then end, then time out

//  setTimeout(()=>{
// console.log('timeout')
// },0)
// Promise.resolve().then(()=>console.log('Promise'))
// console.log('End')

// first End then Promise then timeout


// var x = 20;
// function foo() {
//   console.log(x);
//   x = 10;
// }
// foo();


//   async function foo(){
// return 'Hello World'
// }
// const result = foo()
// console.log(result)