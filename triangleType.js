// Write function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: equilateral, isosceles, or scalene

function checkTriangleType(x, y,z){
    if (x === y && y === z ){
        return "equilateral"
    }
    else if(x === y || y === z || x === z){
        return "isosceles"
    } else {
        return "scalene"
    }
}

console.log(checkTriangleType(3,3,3))
console.log(checkTriangleType(3,4,3))
console.log(checkTriangleType(3,35,5))

function ascen(arr){
    for(let i =0; i< arr.length; i++){
        for (let j=0; j< arr.length - i - 1; j++){
            // to avoid already sorted elements at the end
            if(arr[j]> arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            } 
        }
    }
    return arr
}

console.log(ascen([9,6,4,1]))