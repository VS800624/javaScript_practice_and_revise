//Q) You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words that contain the character x. Note that the returned array may be in any order.

var findWordsContaining = function(words, x) {
   let result = []
   for (let i=0; i<words.length; i++){
    // find if char x is present  in words[i]
    if (words[i].includes(x)){
        result.push(i)
    }
   }
   return result
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"))

// or 
function  findWords(words, x){
    let result = []
    // outer loop for looping through words 
    for(let i = 0; i<words.length; i++){
        // inner loop for looping through each characters 
        for (let j=0; j<words[i].length; j++){
            // find if char x is present  in words[i]
            if(words[i][j] === x){
                result.push(i)
                break
            }
        }
    }
    return result
}

console.log(findWords(["leet", "code"], "e"))