function capitalizeWords(sentence) {
    // Your implementation
    if (!sentence || sentence.trim() === "") return ""; 
    let arr = sentence.trim().split(/\s+/)
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return arr.join(" ")
}

// function capitalizeWords(sentence) {
//     if (!sentence || sentence.trim() === "") return ""; // Handles empty input

//     return sentence
//         .trim()                     // Remove leading/trailing spaces
//         .split(/\s+/)              // Split by one or more spaces (regex handles multiple spaces)
//         .map(word => 
//             word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//         )
//         .join(" ");
// }

console.log(capitalizeWords("  hello     world"));         // "Hello World"
console.log(capitalizeWords("javaScript IS fun"));         // "Javascript Is Fun"
console.log(capitalizeWords("THIS IS A TEST"));            // "This Is A Test"
console.log(capitalizeWords(""));                          // ""


console.log(capitalizeWords("  hello     world"))