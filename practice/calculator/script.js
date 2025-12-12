const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace");
const display = document.querySelector("#display");
const decimal = document.querySelector(".decimal")

let num1 = "";
let num2 = "";
let operator = "";

operators.forEach((o) => {
  o.addEventListener("click", () => {  
    // Block operator if num1 is empty
    if(num1 === "" ) return

    // For square root : apply immediately
    if(o.innerText.trim() === "√" && num1 !== ""){
      num1 = String(Math.sqrt(Number(num1)));
      display.value = num1
    }
    
    // Replace operator if user changes mind before typing num2
    else if(operator !== "" && num2 === ""){
      operator = o.innerText.trim();
      console.log("operator");
      return
    }
     // Block multiple operators after num2 starts
    else if (num2 !== "") return 
    
    // Normal operator selection
      operator = o.innerText;
  });
});

numbers.forEach((btn) => {
  return btn.addEventListener("click", () => {
    if (operator == "") {
      num1 = num1 + btn.innerText;
      display.value = num1;
      console.log(num1);
    } else {
      num2 = num2 + btn.innerText;
      display.value = num2;
      console.log(num2);
    }
  });
});


equal.addEventListener("click", () => {
  // Convert num1 and num2 to numbers
  let a = Number(num1);
  let b = Number(num2);
  let result = ""; 
    console.log("num1:", num1, "num2:", num2, "operator:", operator);

  // Only calculate if num1, operator, num2 exist
  if (num1 !== "" && operator !== "" && num2 !== "") {
    if (operator === "+") {
      result = a + b;
    }
    if (operator === "-") {
      result = a - b;
    }
    if (operator === "*") {
      result = a * b;
    }
     if(operator === "/" && b === 0){
      display.value = "Error"
      num1 = ""
      num2 = ""
      operator = ""
      return
    }
    if(operator === "%" &&  b=== 0){
      display.value = "Error"
      num1 = ""
      num2 = ""
      operator = ""
      return 
    }
    if (operator === "/") {
      result = a / b;
    }
    if (operator === "%") {
      result = (a * b) / 100;
    }
  }
  console.log(result)

  // Display result
  display.value = result;

  // Prepare for next calculation
  num1 = String(result); // store result for next calculation
  num2 = ""; // reset second number
  operator = ""; // reset operator
});

clear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  display.value = "";
  result = "";
});

backspace.addEventListener("click",() => {
  console.log("backspace")
  if(operator === ""){
    num1 = num1.slice(0,-1)
    display.value = num1
  } else {
    num2 = num2.slice(0,-1)
    display.value = num2
  }
  if(display.value === "Error") return
})

decimal.addEventListener("click", () => {
  if(operator === ""){
    if(num1.includes(".")) return  // block multiple decimals
    if(num1 === ""){
      num1 = "0."                // allow starting with `.5` => `0.5`
    } else {
        num1 = num1 + "."
      }
      display.value = num1
  } else {
    if(num2.includes(".")) return   // block multiple decimals
    if(num2 === "") {
      num2 = "0."
    }
       else {
        num2 = num2 + "."
      }
      display.value = num2
  }
})