// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var removeElements = function(head, val) {
    let sentinal = new ListNode()
    sentinal.next = head
    let prev = sentinal
    while (prev != null && prev.next != null ){
        if(prev.next.val === val){
            prev.next = prev.next.next
        }else {
            prev = prev.next
        }
        
    }
    return sentinal.next
};