// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
  if (x<0) return false
    let rem = 0
    let copy = x
  while(x>0){
    rem = rem * 10 + (x%10)
    x = Math.floor(x/10)
  } if(rem===copy){
    return true
  } else return false
};
console.log(isPalindrome(121))