// Write a JS function that takes an array of numbers as input and returns the median value. If the array has even number of elements, return the average of the two middle values.

// Tips:
// sort the array in ascending order.
// If the array has an odd number of elements, the median is the middle element.
// If the array has an even number of elements, the median is the average of the two middle elements.

const findMedian = (arr) => {
    if (arr.length === 0) return "the array is empty"
     let mid = Math.floor(arr.length/2)
    arr = arr.sort((a,b) => a-b)
    console.log(arr)
    if (arr.length % 2 !==0) {
       return arr[mid]
    } else return (arr[mid-1] + arr[mid])/2 
}

console.log(findMedian([3,3,5,15,9,11]))
console.log(findMedian([3,3,5,15,9]))

