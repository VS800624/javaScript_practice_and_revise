// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

var rotateRight = function(head, k) {
    if (!head ||!head.next) return head
    // finding the length of the list
    let curr = head
    let length = 0
    while(curr) {
        curr = curr.next
        length++
    }

    // to avoid unnecessary rotation
    if (k === 0) return head; 
    k = k%length

    let s = head
    let f = head

    // moving f pointer k steps ahead of s pointer
    for(let i =0; i<k; i++){
        f = f.next
    }
    // reaching f pointer to the end of the list
    while(f.next){
        s = s.next
        f = f.next
    }

    let newHead = s.next
    f.next = head
    s.next = null

    return newHead
};