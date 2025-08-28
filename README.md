# javaScript_practice_and_revise

# Notes 
*How JavaScript works?
Ans-Everything in JavaScript happens inside an "execution context".

Execution context has two component
1)memory component[variable environment] 
-This is the place where all variables and functions are stored as key value pairs. eg-{key: value ||  n:2;} 

 2)code component[Thread of execution]
-This is the place where code is executed one line at a time

Note-
*JavaScript is a synchronous single-threaded language

-Single threaded means JavaScript can execute once command at a time
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

Points to be note :
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

Important points:-

1. Code inside curly bracket is called block.
2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
3. Block values are stored inside separate memory than global. They are stored in block. (the reason let and const are called block scope)
4. Shadowing of variables using var, let and const.
5. The shadow should not cross the scope of original otherwise it will give error.
6. shadowing let with var is illegal shadowing and gives error.
7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure.

In other words Closure is a combination of a function and its lexical scope bundled together forms a closure.

Important things about closure:-
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