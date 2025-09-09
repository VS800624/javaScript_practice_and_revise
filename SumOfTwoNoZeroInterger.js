// No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

// Given an integer n, return a list of two integers [a, b] where:

// a and b are No-Zero integers.
// a + b = n

// Example 1:

// Input: n = 2
// Output: [1,1]
// Explanation: Let a = 1 and b = 1.
// Both a and b are no-zero integers, and a + b = 2 = n.

var getNoZeroIntegers = function(n) {
    function hasZero(num) {
        return num.toString().includes("0")
    }
    for (let i =1; i<n ; i++){
        let j = n-i
        if(!hasZero(i) && !hasZero(j)){
            return [i,j]
        }
    }
};

console.log(getNoZeroIntegers(11))