function capitalizeWords(sentence) {
    // Your implementation
    if (!sentence || sentence.trim() === "") return ""; 
    let arr = sentence.trim().split(/\s+/)
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
    }
    return arr.join(" ")
}

console.log(capitalizeWords("  hello     world"))