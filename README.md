# javaScript_practice_and_revise

# Notes 
*How JavaScript works?
Ans-Everything in JavaScript happens inside an "execution context".

Execution context has two component
1)memory component[variable environment] 
-This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

 2)code component[Thread of execution]
-This is the place where code is executed one line at a time(i.e line by line).

Note-
*JavaScript is a synchronous single-threaded language

-Single threaded means JavaScript can execute once command at a time.
-Synchronous single-threaded that means JavaScript can execute one command at a time in a specific order.

Q) How JS code is executed?
1. Whenever any JavaScript code is executed an execution context is created and it is the Global Execution Context.
2. An Execution Context is basically a box which has two components called Memory Component(Variable Environment) and Code Component(Thread Of Execution).
3. The Execution context is created in two phases
   a. Memory Creation Phase : In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword Undefined in case of variables and literally the whole function in case of functions.
   b. Code Execution Phase : In this Phase, code is executed line by line.

4. Whenever there is a function invocation an all new execution context is created and same process is followed again.
5. If there is any function parameter then it is also allocated memory while creating the execution context of the function.
6. Whenever return keyword is encountered , it means the task of function is over and it returns back the control of the program back to the place where it was invoked. and with this this execution context is deleted from stack.

7. Call Stack is basically a stack which maintains the order of execution of execution context. Whenever a code is executed the Global Execution Context is pushed into the stack first and later on as per the function invocation the  execution context is pushed into the stack. When the function code is done executing the execution context is popped out and last the Global Execution Context s also deleted.

Q) What is hosting in JS? 

After some research what I understood is -> When a JavaScript program runs, a global execution context is created. This context consists of two phases:
a) Memory Creation Phase :
.Variable declarations are scanned and allocated memory, initialized with the value 'undefined'.
.Function declarations are scanned and stored in memory with their entire code.
b) Code Execution Phase:
The code is executed line by line.

Hoisting is not about physically moving code to the top, but rather about how JavaScript allocates memory for variables and functions during the memory creation phase of the execution context. This mechanism allows for certain behaviors like using functions before they appear in the code, but it's crucial to understand that variables are initialized as 'undefined' until they're assigned a value during code execution. You can call a function before its declaration in the code because the entire function is available in memory from the start. Trying to access a variable before its declaration will result in 'undefined'.
Function expressions and arrow functions, being treated as variables, hence cannot be called before their declaration in the code. Variable and function declarations are processed before any code is executed. However, only the declarations are processed, not the initializations. This gives the impression that declarations are "moved to the top" of their scope, but it's more accurate to say they're processed early in the execution context's creation.

# Points to be note :
1. In JS, before the code is executed, the variables get initialized to undefined.
2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
5. Variable declarations are scanned and are made undefined
6. Function declarations are scanned and are made available

Q) How function works in JS ? 

1. We learnt how functions work in JS.
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
3. In the first phase, the variables are assigned "undefined" while functions have their own code.
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
5. Once the function ends, the EC (Execution Context) is removed from the call stack.
6. When the program ends, even the global EC is pulled out of the call stack.

Q) Scope Chain ? 

lexical environment is the local memory + reference to the lexical environment of parent.

1. Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.

Q) Temporal Dead Zone ?

1. let and const are hoisted but its memory is allocated at other place than window (global execution context) which cannot be accessed before initialization.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialization must be done on the same line.
6. There are three types of error: [1] referenceError: while trying to access variable which is not there in global memory {or variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initializing variables at the top is good idea, helps shrinks TDZ to zero.

Q) Block Scope amd Shadowing?

Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.
Scope :- scope of a variable or a function is the place where these are accessible.
Block scope :-  The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
Shadowing :-  Providing same name to the variable as of those variable which are present in outer scope.

# Important points:-

1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

# Closure:
Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure.

In other words Closure is a combination of a function and its lexical scope bundled together forms a closure.

# Important things about closure:-
   1. An inner function can be directly called using two parenthesis ()().
   2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
   3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
   4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
   5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

Uses of Closures:
 - It help us in data hiding and encapsulation.
 - Modules Design Pattern
 - Curring
 - Functions like once
 - memozize
 - maintaining sate in async world
 - setTimeouts
 - Iterators
 - and many more...

 
Function statement / Function Declaration : the function is normally defined and can be used later on
Function expression : the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

Anonymous function : function where there is no need to define name for the function, it just can be assigned to variable

Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

first class Functions / first class citizens : 
1) used as values
2) can be passed as argument
3) can be executed inside a closured function
4) can be taken as return

callback function : 

A callback function in JavaScript is simply a function that is passed as an argument to another function and is executed later, usually after some task is completed.
In simple words:
You give a function to another function, and that function will "call it back" when needed.

1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is single threaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used

note: the code of execution is from right to left in js.

# Event Loop

In JavaScript, the event loop, microtask queue, callback queue, and call stack are all key components that help manage the asynchronous nature of the language.

Call Stack:

The call stack is a data structure that keeps track of the function calls in your code. It follows the Last In, First Out (LIFO) principle, meaning the last function that gets pushed onto the stack is the first one to be popped off when the function completes.
Callback Queue (Task Queue):

The callback queue, also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. These tasks usually come from asynchronous operations, such as DOM events, HTTP requests, or timers.
Event Loop:

The event loop is responsible for continuously checking the call stack and the callback queue. If the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution.

Microtask Queue:
The microtask queue holds tasks that are also ready to be executed but has a higher priority than the callback queue. Microtasks are usually scheduled by JavaScript promises (the callback function which come through promises), mutation observers, and other similar mechanisms and everything else will go to callback queue. 

Here's how they work together:
When an asynchronous operation is encountered, such as a setTimeout or a Promise, the callback associated with that operation is sent to the callback queue after the specified time or when the Promise settles.

When the call stack is empty (no functions being executed), the event loop takes the first task from the microtask queue and pushes it onto the call stack.

If the microtask queue is empty, the event loop looks at the callback queue and pushes the first task onto the call stack.

This process repeats, allowing JavaScript to handle asynchronous operations without blocking the main thread.

Understanding these concepts is crucial for writing efficient and responsive asynchronous JavaScript code, as it helps you manage the order of execution and prevent blocking the user interface.

Important Points:-
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handlers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

 ┌─────────────────────┐
 │      Call Stack     │
 └─────────┬───────────┘
           │
           ▼
 ┌─────────────────────┐
 │   Web APIs (timers) │
 │   setTimeout (0ms)  │
 │   setInterval (0ms) │
 └─────────┬───────────┘
           │
           ▼
 ┌─────────────────────┐         ┌─────────────────────┐
 │   Microtask Queue   │         │   Callback Queue    │
 │   Promise cb        │         │   Timeout cb        │
 └─────────┬───────────┘         │   Interval cb       │
           │                      └─────────┬───────────┘
           ▼                                │
 ┌─────────────────────┐                    ▼
 │     Event Loop      │────────────────────┘
 └─────────────────────┘


Start
End
Promise
Timeout
Interval
Interval
Interval ...

JS Engine :-
1. JS runtime environment contains all elements required to run JS.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimizes code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimization such as inlining, copy elusion, inline caching etc that optimizes the memory space which is used by the JS Engine.

Basic idea about Mark & Sweep Algo:
It comprise of 2 phases - 
1. Mark phase
2. Sweep phase

All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

During sweep phase, the objects marked with 0 are removed from heap memory. and also all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.

So, it's basically tracing garbage collector concept.

We have JS Runtime Environment so whenever you execute any piece of js code it needs a container which has everything require to run a JS code that was the JS Runtime Environment  the browser has a runtime environment , node.js has a js runtime environment and it constitutes of the heart of the JS Runtime Environment which is the JS Engine it also has access to APIs call back queue , event loop and lot of other stuffs it depends on the JS Runtime Environment there could be different things inside different JS Runtime Environment .
JS Engine has many phases , ith has three phases :-  the code was first went through the parsing phase , the compilation phase and then the execution.
And in the parsing phase the tokens are generated and after the tokens, the syntax parser basically parse the whole code and then converts it into a AST (Abstract Syntax Tree) now this AST then is passed on the interpreter , JS is a JIT (just in time) Compilation language (Interpreter + Compiler) so we have a interpreter and compiler , AST is goes to interpreter,  interpreter produces the bit code which is then executed with the help of memory heap and call stack, and this compiler is like consistently working upon optimizing the code as much as possible , we have a garbage collector which basically does its job of collecting garbage and optimize the memory space which is used by the JS Engine.

setTimeout :-
1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms. 
2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

# High order function

A higher-order function is a function that does one or both of the following:
- Takes one or more functions as arguments.
- Returns a function as its result.

Breaking Down:
"Khana khane ke baad bartan andar rakh" is like a higher-order function.
"Bartan andar rakh" is like the callback function.

How It Works:
The higher-order function (khana khane ke baad bartan andar rakh) does something (e.g., eating food) and then calls another function when it’s done (bartan andar rakh).
The callback function (bartan andar rakh) is the action that gets executed after the main task is completed.

In this analogy:
Khana khana (eating food) is the main task.
Bartan andar rakh (putting the dishes away) is the additional task that happens after, which is like the callback function being executed after the main function is done.

So, "bartan andar rakh" is acting like a callback function that gets executed after the main action (eating) is completed.

Important points:-
1. Follow DRY(Don't Repeat Yourself) principle while coding.
2. Use function to stop writing repeating line of codes.
3. Function that takes another function as argument(callback function) is known as Higher order functions.
4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
5. If we use Array.property.function-name. This function is accessible to any array in your code.

--> What is Inheritance of an Object in Javascript?
  When a new object is trying to access properties and methods of another old object, because this new object might be created from the old objects reference.
Example :
object1 = { city:'mumbai' };
object2 = Object.create(object1);
object2.name = 'Shiv';
console.log(object2.name + 'is from' + object2.city); // here when one couldn't find city property inside object2, it goes to find this property in the inherited object1.
This is called inheritance of an object in javascript. This type of inheritance is different from the classical inheritance of oops. This type of inheritance is provided by Prototype Inheritance.

1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc). If you have any array and you need to iterate over that array and come up to a single value out of it use reduce there.
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

