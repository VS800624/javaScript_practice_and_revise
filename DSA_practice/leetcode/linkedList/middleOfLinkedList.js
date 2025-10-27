// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// good approach
var middleNode = function(head) {
    let slow = head
    let fast = head
    // while(fast && fast.next) //or
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow    
};

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Example linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1, 
            new ListNode(2, 
            new ListNode(3, 
            new ListNode(4, 
            new ListNode(5)))));


    let middle = middleNode(head);
    console.log(middle.val);  // Output: 3



// or by converting the linked list in the array then finding the middle element
// function middle(head){
//     arr = []
//     let curr = head
//     while(curr != null ){
//         arr.push(curr.val)
//         curr = curr.next
//     }
//     // Middle node index (0-based)
//     let middleIndex = Math.floor(arr.length / 2);
//     return arr[middleIndex]; // return value of middle node    
// }