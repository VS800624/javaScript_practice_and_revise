// or two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"

// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"

// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"

// Output: ""

// Example 4:

// Input: str1 = "AAAAAB", str2 = "AAA"

// Output: ""​​​​​​​

 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters

// with recursion
// var gcdOfStrings = function (str1, str2) {
 
//   if (str1 === str2) return str1

//   // critical check
//   if (!str1.startsWith(str2) && !str2.startsWith(str1)) {
//     return ""
//   }

//   if(str1.length > str2.length){
//     return gcdOfStrings(str1.slice(str2.length), str2)
//   } else {
//     return gcdOfStrings(str1, str2.slice(str1.length))
//   }
  
// }

// or 

var gcdOfStrings = function (str1, str2) {
  // Check if a common divisor string is possible
  if (str1 + str2 !== str2+str1) return ""

  // GCD logic (Euclidean algorithm)
  const gcd = (a,b) => {
    while(b!= 0 ){
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }
  const len = gcd(str1.length, str2.length)
  return str1.slice(0,len)
  // or  return str1.substring(0,len)
}

console.log(gcdOfStrings("AAAAAB","AAA"))
