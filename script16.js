// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your name: ", function(name) {
//   console.log("Hello, " + name);
//   rl.close();
// });
// Q) Find the longest substring without repeating characters in a string
function longestSub(s) {
    let left = 0;
    let maxLen = 0;
    let map = new Map(); // HashMap ke jagah JS ka Map

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        // agar duplicate character already map me hai
        if (map.has(ch) && map.get(ch) >= left) {
            left = map.get(ch) + 1;
        }

        // character ka latest index update karo
        map.set(ch, right);

        // max length update karo
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Input lene ke liye (Node.js environment me)
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function (s) {
    console.log("Length of largest substring:", longestSub(s));
    rl.close();
});