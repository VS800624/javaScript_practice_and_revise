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

// console.log( [1,2]==[1,2])

//  const user1={
// name: 'john',
// age:25,
// address:{
// city:'Mumbai',
// state:'Mahrashtra'
// },}
// const user2 = user1
// user2.name = 'Ramesh'
// user2.address.city='Pune'
// console.log(user1)
// console.log(user2)

//filter out all values less than 3
// const numbers= [0,1,2,3,4,5,6] 

// filterNumber = numbers.filter((number) => number < 3 )
// console.log(filterNumber)

//  create a string variable add a string in lowerCase and convert first letter of each to uppercase OR can you transform it into array.
let str = "hello how are you"
let str2 = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1))
console.log(str2.join(" "))


// 45. PROJECT:: create a TODO list in which there will be input and add button delete also
