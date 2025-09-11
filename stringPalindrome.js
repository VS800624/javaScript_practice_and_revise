// Write a function to determine whether a given string is a palindrome or not.


// const isPalindrome = (str) => {
//     str = str.toLowerCase().replace(/\W/g,"")
//     let reverse = str.split("").reverse().join("")
//     console.log(reverse)
//     return str === reverse ? true : false
// }

// console.log(isPalindrome("A man, a plan, a canal"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("hello"))

// Note: 
// .replace(/\W/g,""): Uses the replace() method with a regular expression (/\W/g) to remove all non-word character from the string. Here: 
// \W matches any non-word character (equivalent to [^a-zA-Z0-9_])
//  The g flag performs a global search, meaning it replaces all occurrences of non-word characters in the string.
// So, replace(/\W/g,"") replaces all non-word characters with an empty string, effectively removing them from the string.  

// without replace
function isPalindrome(str) {
    str = str.toLowerCase()
    let i = 0
    let j = str.length -1
    while (i< j){
        if (str[i] != str[j]){
           return "No, It is not Palindrome"
           
        }
        i++
        j--
    }
    return "Yes, It is Palindrome"
}

// Note: In JavaScript, strings are array-like objects — they have an index (str[0], str[1] …) and a .length property, just like arrays.

// with for loop
// function isPalindrome(str) {
//     str = str.toLowerCase()

//     // i starts from left, j from right
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str[i] !== str[j]) {
//             console.log("No, It is not Palindrome")
//             return
//         }
//     }

//     console.log("Yes, It is Palindrome")
// }

// function validatePalindrome(str) {
//     // sanitize -> keep only letters and numbers
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//     // if string becomes empty (only non-alphanumeric were present)
//     if (str.length === 0) return true;

//     // check palindrome
//     return str === str.split("").reverse().join("");
// }

function validatePalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (str.length === 0) return true;
    let arr = str.split("");
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return arr.join("") === reverse.join("");
}

console.log(validatePalindrome(" "))

console.log(isPalindrome("A man, a plan, a canal"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))