// Simple currency convertor 

const rates = {
    USD : 1,    // base currency
    EUR : 0.9,  // 1USD = 0.9 EUR
    GBP: 0.8,   // USD = 0.8 GBP
    INR : 82,   // USD = 82 INR
}

// const {USD, EUR, GBP , INR} = rates

const convertCurrency = (amount, fC, tC) => {
    let amountInUSD = 0
    if (fC !== "USD"){
        amountInUSD = amount/ rates[fC]
    } else {
        amountInUSD =  amount
    }
    let convertedAmount = 0
    if (tC !== "USD"){
        convertedAmount = amountInUSD * rates[tC]
    }else {
        convertedAmount = amount
    }
    return convertedAmount
}

// Example usage:
console.log(convertCurrency(100, "INR", "EUR"))
