// console.log("hello world")
// console.log("Akshay Saini")
// console.log("Akshay 2")
// console.log(true)

// let firstName = 2
// let lastName = 7

// let fullName = firstName + " " + lastName
// console.log(fullName);

// let arr = [2, 43, 67, 87];
// console.log(arr[5]);

// let arr =  ["akshay", 7, [4, 6 , [9 , 4, 30]]]

//  console.log(arr[2][2][1]);

//  let obj = {
//     a: 7,
//     firstName: "Akshay",
//     lastName: "Saini",
//     bool: true,
//     arr: [3,2,1]
//  }

//  console.log(obj.arr)

//  function greet(name){
//     console.log("Namaste," + name);
//  }

//  greet("Akshay")

//  function sum(a, b)  {
//     console.log(a + b);
//  }

//  sum(5, 7);

//  function multi(a, b){
//     console.log(a * b);
//  }

//  multi(5,7);

 function square(x){
    let result = x * x;
    return result;
 }

 let value = square(5);

 console.log(value)

 let z = square(99)

 console.log(z);

//  Create a function which accepts the age and tells whether a person is eligible to vote or not

function eligibleToVote(age){
    if (age < 1) {
        console.log("Invalid Input")
    } else if (age < 18) {
        console.log("Person is eligible to vote")
    } else {
        console.log("Person is eligible to vote")
    }
}

eligibleToVote(12);


// Create a function to check if a number is even or odd

function isOddEven(n){
    if (n % 2 == 0){
        console.log("Number is even")
    } else {
        console.log("Number is odd")
    }
}

isOddEven(21)