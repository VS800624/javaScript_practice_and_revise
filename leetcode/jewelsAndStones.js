// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Using built-in method(includes) :
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0
//     for (let i = 0; i<stones.length ; i++){
//         if(jewels.includes(stones[i])){
//             count++
//         }
//     }
//     return count
// };

// or using loops brute force approach
// var numJewelsInStones = function(jewels, stones) {
//     let count = 0
//     for (let i = 0; i<stones.length ; i++){
//         for(let j=0; j<jewels.length; j++){
//             if(jewels[j] === stones[i]){
//                 count++
//                 break
//             }
//         }
//     }
//     return count
// };

// or using hash map or set

var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let set = new Set()
    for (let i = 0; i<jewels.length ; i++){
        set.add(jewels[i])
    }

    for(let i =0; i<stones.length ; i++){
        if(set.has(stones[i])){
            count++
        }
    }
    return count
};

console.log(numJewelsInStones("aA","aAAbbbb"))

