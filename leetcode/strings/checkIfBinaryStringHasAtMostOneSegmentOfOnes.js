// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

 

// Example 1:

// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.
// Example 2:

// Input: s = "110"
// Output: true
 

// Constraints:

// 1 <= s.length <= 100
// s[i]​​​​ is either '0' or '1'.
// s[0] is '1'.

// The cut-short version of what the above poorly constructed question is asking is, to search within the string for '01'.

// If we come across '01' then the str is False. Else it's True.

var checkOnesSegment = function(s) {
    for (let i =0; i<s.length-1; i++){
        if (s[i] === "0" && s[i+1] === "1") {
            return false
        }
    }
    return true
};

console.log(checkOnesSegment("110"))