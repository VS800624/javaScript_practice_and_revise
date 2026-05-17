var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[^\w\s]/g, "");
    let arr = paragraph.split(" ")
    let st = new Set(banned)

    let count = 0
    let mp = {}
    let ans = 0

    for (let word of arr){
        if (!st.has(word)){
            if(!(word in mp)){
                mp[word] = 1
            }else {
                mp[word] += 1
            }
        }
    }

    for (val in mp){
        if(count < mp[val]){
            count = mp[val]
            ans = val
        }
    }
    return ans
};

res = mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])
console.log(res);