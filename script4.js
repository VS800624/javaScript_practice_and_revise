
// Q) find the count of the characters un the string
const str = "hare krishna hare krishna" 
// note a string is array of characters

const obj = {}

for (x of str) {
    if (obj[x]) {
        obj[x] += 1
    }else {
        obj[x] = 1
    }
}

console.log(obj)

for (var i = 0 ; i < 10; i++) {
    setTimeout(() => {console.log(i)}, 0)
}

for (let i = 0 ; i < 10; i++) {
    setTimeout(() => {console.log(i)}, 0)
}