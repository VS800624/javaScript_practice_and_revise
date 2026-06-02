var findThePrefixCommonArray = function(A, B) {
    let freq = {}
    let count = 0
    let res = new Array(B.length).fill(0)
    let i = j = 0
    for (let i =0; i<A.length; i++){
        res[i] = count
        if (!freq[A[i]] ){
            freq[A[i]] = 1
        }else{
            freq[A[i]] += 1
        }

        if (freq[A[i]] == 2){
            count++
       }
        
        if (!freq[B[i]]){
            freq[B[i]] = 1
        }else{
            freq[B[i]] += 1
        }
       if (freq[B[i]] == 2){
        count++
       }
       res[i] = count
    }
    console.log(freq);
    return res
};

const ans = findThePrefixCommonArray([2,3,1],[3,1,2])
console.log(ans);