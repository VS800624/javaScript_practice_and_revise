// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// var reverseWords = function(s) {
//     let arr = s.split(" ")
//     for(let i =0; i<arr.length; i++){
//         arr[i] = arr[i].split("").reverse().join("")
//     }
//     return arr.join(" ")
// };

// or
    // var reverseWords = function(s){
    //     let arr = s.split(" ")
        
    //     for (let i =0; i< arr.length; i++){
    //         let reverse = ""
    //         for(let j = arr[i].length -1;j >=0; j-- ){
    //             reverse = reverse + arr[i][j]
    //              
    //         }
    //         arr[i] = reverse
    //     }
    //     return arr.join(" ")
    // }

    // or 
    var reverseWords = (s) => {
        let arr = s.split(" ")
        let reverseStr = arr.map((str) => [...str].reverse().join(""))
        return reverseStr.join(" ")
    }


console.log(reverseWords("Let's take LeetCode contest"))