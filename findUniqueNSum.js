//  Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.
 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

var sumZero = function(n) {
    if (n===0) return 0
    let result = []
    if(n%2==1){
        result.push(0)
        }
    for (i=1;i<=Math.floor(n/2); i++){
         result.push(+i,-i)
    }
    return result
};

console.log(sumZero(5))