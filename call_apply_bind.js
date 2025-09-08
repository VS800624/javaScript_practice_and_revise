

let name = {
    firstName: "Vishal",
    lastName: "Singh",
}

let printFullName = function(hometown,state) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown +","+ state)
    }

printFullName.call(name, "Dehradun","UK");  // the first argument will always be the reference to the this keyword and the later arguments can be the arguments to the function

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

// funciton borrowing
printFullName.call(name2,"Mumbai", "Maharashtra");

// apply method
printFullName.apply(name2,["Mumbai", "Maharashtra"]);

// bind method
let printMyName = printFullName.bind(name2,"Mumbai", "Maharashtra");
console.log(printMyName)
printMyName()  
// the bind is basically used  to just bind the copy of that method and used it later

// All these methods are used for method/functions borrowing/sharing.
// 1. call method is used to call the function with the given this value and argument can be passed individually.
// 2. apply method is similar to call method, the only difference is that instead of passing argument individually, will pass the argument in a list/array.
// 3. bind method is similar to call method. It is also used to override this value, but the difference is it will not invoke the function instantly but return a function with attached this and argument which can be called later.
