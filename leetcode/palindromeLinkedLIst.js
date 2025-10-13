// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

var isPalindrome = function(head) {
//    first find middle element
    let slow = head
    let fast = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next 
    }

    // reversing the 2nd half in linked list
    let prev = null
    let curr = slow
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // checking if it is palindrome or not 
    let firstList = head
    let secondList = prev
    while(secondList){
        if(firstList.val != secondList.val){
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true
};