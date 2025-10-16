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

// we are using two passes (two full loops) in this approach 
// 1)calculating the length of the linked list
// 2)reaching the prev position and deleting the nth node from end

// helper function for creating new node
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 

// var removeNthFromEnd = function(head, n) {
//    let sentinal = new ListNode() 
//     sentinal.next = head
//     let length = 0
// //    finding the length of the node
//     while(head){
//         head = head.next
//         length++
//     }

//     // removing the nth node from the end
//     let prev = sentinal
//     let prevPos = length - n
//     for(let i =0; i<prevPos; i++){
//         prev = prev.next
//     }
//     prev.next = prev.next.next
//     return sentinal.next
// };

// using one passes (one full loop)

function removeNthFromEnd(head,n){
    // add sentinal node at the start
    let sentinal = new ListNode()
    sentinal.next = head
    // moving the first pointer ahead by n 
    let first = sentinal
    for(let i = 0; i<n; i++){
        first = first.next
    }

    // moving both the pointers until first reaches the last node
     let second = sentinal
     while( first.next){
        first = first.next
        second = second.next
     }
    //  just delete second.next
     second.next = second.next.next
    return sentinal.next
}