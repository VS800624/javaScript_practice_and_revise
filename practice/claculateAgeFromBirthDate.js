// Calculate Age from birthDate

// Create a function that takes a birthDate as input and returns the current age of the person . The birthDate will be provided in the format "YYYY-MM-DD"



function calculateAge(dob){
    let todayDate = new Date()
    let birthDate = new Date(dob)

    let age = todayDate.getFullYear() - birthDate.getFullYear()
 

    let monthDiff = todayDate.getMonth() - birthDate.getMonth()

    if(monthDiff< 0 || monthDiff === 0 && todayDate.getDate() < birthDate.getDate()){
        age--
    }
    return age
}

// or 
// function calculateAge(dob){
//     let x=new Date();
//     let y=new Date(dob);

//     return Math.floor((x-y)/(1000*60*60*24*365));
// }


console.log(calculateAge("1990-10-26"))