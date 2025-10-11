// Write a function that generates a random hexadecimal color code each time it is called. The function should  return a string representing the random color code in the format '#RRGGBB', where RR, GG and BB are two-digit hexadecimal numbers representing the red, green, and blue components of the color, respectively.

// Your challenge is to implement the randomHexColor function using JS and ensure that it produces a valid hexadecimal color code with a length of 7 characters (including the #symbol)

function randomHexColor() {
    let color = "#"
    color += Math.random().toString(16).slice(2,8).padEnd(6,0)
    return color
}

// or
// function randomHexColor (){
//     return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
// }

console.log(randomHexColor())

// note: in case Math.random().toString(16).slice(2,8) this return less than siz character the padEnd will add 0 at the end eg if #47o3d then padend will add #47o3d00 2 zeroes at the end