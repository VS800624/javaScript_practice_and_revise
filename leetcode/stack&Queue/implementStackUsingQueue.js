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


var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length
    for(let i =0; i<n-1; i++){
      // let firstEle = this.q1.shift()
      // this.q2.push(firstEle)
      this.q2.push(this.q1.shift())
    }
    let ans = this.q1.shift()

    // exchange q1 and q2
    let temp = this.q1
    this.q1 = this.q2
    this.q2 =  temp
  // or  swap the queues
  // [this.q1, this.q2] = [this.q2, this.q1];
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length
    for(let i =0; i<n-1; i++){
      this.q2.push(this.q1.shift())
    }
    // let front = this.q1[0]
    // this.q2.push(this.q1.shift()) //0r

   let front = this.q1.shift()
  this.q2.push(front)


    // 
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp
    return first
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */