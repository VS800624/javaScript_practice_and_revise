// Simple bar chart form array data
// Create a function that takes an array of numbers and generates a simple text-based bar chart.


function generateBarChart(arr){
    let bars = []
    for (let i =0;i<arr.length; i++){
        let star = ""
        let number = 0
        while (number < arr[i]){
            star = star + "*"
            number++
        }
        bars.push(`${i + 1}: ${star}`)
    }
    return bars.join("\n")
}



// or 
// const generateBarChart = (arr) => {
//     let finalBarChart = ""

//     for(let i = 0; i < arr.length; i++) {
//         rowChart = `${i+1} : `

//         for(let j = 1; j <= arr[i]; j++) {
//             rowChart += "*"
//         }

//         finalBarChart += `${rowChart}\n`
//         rowChart = ``
//     }
    
//     return finalBarChart
// }

// or
// function generateBarChart(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}: `, "*".repeat(arr[i]));
//   }
// }

// or 
// function generateBarChart(arr){
//     const newArr = arr.map((curEle,index) => {
//         let star = ""
//         let number = 0
//         while(number < curEle){
//             star = star + "*"
//             number++
//         }
//         return `${index + 1}: ${star}`
//     })
//     console.log(newArr.join('\n'))
// }

console.log(generateBarChart([5,3,9,2]))