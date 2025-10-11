// Write a function that calculates the no. of days between two dates. The dates will be provided in the format "YYYY-MM-DD"

function calculatesDays(d1, d2){
    let date1 = new Date(d1)
    let date2 = new Date(d2)

    let difference = Math.abs(date2 - date1)
     return difference/(24 * 60 * 60 * 1000)
}

console.log(calculatesDays("2024-01-01", "2024-01-31"))