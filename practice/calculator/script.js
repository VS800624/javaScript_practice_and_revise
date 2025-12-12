const numbers = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const backspace = document.querySelector(".backspace");
const display = document.querySelector("#display");

let num1 = "";
let num2 = "";
let operator = "";

operators.forEach((o) => {
  o.addEventListener("click", () => {
    operator = o.innerText;
    console.log("operator");
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
    if (operator === "/") {
      result = a / b;
    }
    if (operator === "%") {
      result = a % b;
    }

    if (operator === "√") {
      result = Math.sqrt(a);
    }
  }

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
