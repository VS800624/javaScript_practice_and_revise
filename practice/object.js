var a ={}, b = {key: 'b'},
c = {key: 'c'}

a[b] = 123;
a[c] = 456;
console.log(a[b])

const code = {
    type: "web"
}

const reactJs = {
    name : "js",
    web:  true
}
// Q) which method is not valid 
// a)  reactJs[code.type]

// b) reactJs[reactJs["type"]]

// c) code.type.web   // not valid


