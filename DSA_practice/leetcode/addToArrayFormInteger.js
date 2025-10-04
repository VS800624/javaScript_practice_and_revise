// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

function addToArrayForm(num,k) { 
    let numStr = num.join("")
    let result = Number(numStr) + k
    resultArray = result.toString().split('').map(Number)
    return resultArray
}

console.log(addToArrayForm([1,2,0,0],34))


// for big digits

function addToArrayForm(num, k) {
    let result = [];
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            k += num[i]; // add current digit to k
        }
        result.push(k % 10); // store last digit
        k = Math.floor(k / 10); // carry over
        i--;
    }

    result.reverse(); // because we added digits from the end
    return result;
}

// Example test
console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));
// Output: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
