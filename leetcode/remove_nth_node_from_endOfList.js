// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function(head, n) {
   let sentinal = new ListNode() 
    sentinal.next = head
    let length = 0
//    finding the length of the node
    while(head){
        head = head.next
        length++
    }

    // removing the nth node from the end
    let prev = sentinal
    let prevPos = length - n
    for(let i =0; i<prevPos; i++){
        prev = prev.next
    }
    prev.next = prev.next.next
    return sentinal.next
};