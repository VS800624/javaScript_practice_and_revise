// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

// creating a new node with this function and let newNode = new Node(val)
// single Node
function Node(val){
    this.val = val
    this.next = null
}

// we initialized our linked list with null
let MyLinkedList = function() {
    this.head = null
    this.size = 0
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // corner case
    if(index < 0 || index >= this.size) return -1

    // reaching the giving index
    let curr = this.head
    for(let i = 0; i<index ; i++){
        curr = curr.next
    }
    // return curr // if it is asking to return the node
    return curr.val  // it is asking us to return val

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    newNode.next = this.head
    this.head  = newNode
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val)
    // corner case
    if(this.head === null){
        this.head = newNode
    } else {
        // reach the last element (traversing)
        // with linked list while loop is common 
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = newNode

    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val)
    if(index<0 || index>= this.size) return
    if(index === 0){
        this.addAtHead(val)
        return
    } else if (index === this.size) {
        this.addAtTail(val)
        return 
    }
    // traversing
    let curr = curr.next 
    // if i know where exactly i need to go then we can write for loop so, we can go nth index (we can also write while loop)
    for(let i = 0; i<index-1; i++){
        newNode.next = curr.next
        curr.next = newNode
    }
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>= this.size) return
    if(index === 0) {
        this.head = this.head.next
    } else {
        let curr = this.head 
        for(let i =0; i< index -1; i++){
            curr = curr.next
        }
        curr.next = curr.next.next 
    }
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


