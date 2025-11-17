// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false
 

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
// MyQueue.prototype.pop = function() {
//     let n = this.s1.length
//     if(this. s2.length ===0){
//       for(let i=0; i<n; i++){
//         this.s2.push(this.s1.pop())
//       }
//     }  
//       return this.s2.pop()
// };

// or 
MyQueue.prototype.pop = function() {
   if(this.s2.length === 0){
    while(this.s2.length>0){
      this.s2.push(this.s1.pop())
    }
   }
   return this.s2.pop()
};

/**
 * @return {number}
 */
// MyQueue.prototype.peek = function() {
//      let n = this.s1.length
//     if(s2.length ===0){
//       for(let i=0; i<n; i++){
//         this.s2.push(this.s1.pop())
//       }
//     }
//     return  this.s2[this.s2.length-1]
// };

// or 
MyQueue.prototype.peek = function() {
     if(this.s2.length === 0){
      while(this.s2.length>0){
        this.s2.push(this.s1.pop())
      }
     }
     return this.s2[this.s2.length-1] 
};


/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s2.length === 0 && this.s1.length === 0
};



/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x) 
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */