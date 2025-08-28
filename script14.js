// Q) 1
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
console.log(counter1()); // ?
console.log(counter1()); // ?
const counter2 = makeCounter();
console.log(counter2()); // ?
console.log(counter1()); // ?

// Answer: 1, 2, 1, 2 
// Reason: because when you store the closure function in a different variable it make different memory here counter1 and counter2 are pointing to the different function. Each call to makeCounter() creates a new closure with its own count. 

// Q)2

function rememberMe(name) {
    return function() {
        console.log("Hi, " + name);
    };
}

const greetJohn = rememberMe("John");
const greetAlice = rememberMe("Alice");

greetJohn();  // ?
greetAlice(); // ?

//  Answer: "Hi, John", "Hi, Alice" 
// Reason: Each closure remembers its own name. Same reasoning as Q1.

// Q)3
function tricky() {
    var value = 100;
    return {
        getValue: function() {
            return value;
        },
        setValue: function(newValue) {
            value = newValue;
        }
    };
}

const obj = tricky();
console.log(obj.getValue()); // ?
obj.setValue(200);
console.log(obj.getValue()); // ?


// Answer: 100, 200 
// Reason: The closure holds reference to value, not a copy. When setValue changes it, getValue also sees the updated value. Good reasoning.

// Q.4)
function secret() {
    let password = "12345";
    return {
        guess: function(p) {
            return p === password;
        }
    };
}

const game = secret();
console.log(game.guess("11111")); // ?
console.log(game.guess("12345")); // ?

// Answer: false, true 
// Reason: Closure keeps password private, only accessible via guess.

// Q.5)
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return function deepInner() {
            count++;
            return count;
        }
    }
}

const level1 = outer();
const level2 = level1();
console.log(level2()); // ?
console.log(level2()); // ?

// const level1 = outer();   // count = 0
// const level2 = level1();  // inner runs → count = 1
// console.log(level2());    // deepInner runs → count = 2
// console.log(level2());    // deepInner runs again → count = 3


// output: 2, 3

// Q.6)
function createUser(name) {
    let score = 0;
    return {
        getName: function() {
            return name;
        },
        increaseScore: function() {
            score++;
        },
        getScore: function() {
            return score;
        }
    }
}
const user = createUser("Vishal");
console.log(user.getName());   // ?
console.log(user.getScore());  // ?
user.increaseScore();
user.increaseScore();
console.log(user.getScore());  // ?

// console.log(user.getName());   // "Vishal"
// console.log(user.getScore());  // 0  (initial score)
// user.increaseScore();          // score = 1
// user.increaseScore();          // score = 2
// console.log(user.getScore());  // 2

//  output: "Vishal", 0, 2


// Q.7)
function mystery() {
    var num = 42;
    return function() {
        return num;
    }
}
var hidden = mystery();
num = 100;
console.log(hidden()); // ?

//  Answer: 42 
// Reason: The closure captures num inside mystery function’s scope, not the global num. So changing global num doesn’t affect it.