// Write a function that returns the count of digits in a number

function countDigits(n){
    if (n==0){
        return 1;
    }
    // math.abs converting negative number to positive number
    n = Math.abs(n)
    let count = 0;
    while (n>0){
        // Math.floor round down the point value eg: Math.floor(10.6) = 10
        n = Math.floor(n/10)
        count++
    }
    return count
}


// let result = countDigits(-8982)
// console.log(result)

// Palindrome Number

function isPalindrome(n){
    if (n < 0){
        return console.log(n + " is not a palindrome number")
    }
    let rev = 0;
    let nCopy = n
    while(n>0){
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n/10)
    }
    if (rev == nCopy){
        return console.log( nCopy + " is a Palindrome Number")
        // return true
    } else {
        return console.log(nCopy + " is not a Palindrome Number")
        // return false
    }
    // return rev == nCopy
}

isPalindrome(8921389)
// let result = isPalindrome(829342)
// console.log(result)

// Reverse Number

function isReverse(n){
    let nCopy = n
    n = Math.abs(n)
    let rev = 0
    while(n>0){
        let rem = n % 10
        rev = (10 * rev)  + rem;
        n = Math.floor(n/10)
    }

    // let limit = Math.pow(2,31)  // or
    let limit = 2**31
    if(rev < -limit || rev> limit) return 0
    
    return (nCopy<0) ? -rev: rev;
}

let result = isReverse(-897)
console.log(result)