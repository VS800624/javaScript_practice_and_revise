let computer = Math.ceil(Math.random() * 100)
let guess
let count = 0
while (computer != guess){
  guess = Number(prompt("Guess the correct number between 1 to 100"))
  if(isNaN(guess)){
    alert("Number is invalid, please try again!")
  } else if(guess < computer){
    alert("Number is too low, please try again")
    count++
  } else if (guess > computer){
    alert("Number is too high, please try again!")
    count++
  } else {
    alert("Congratulations! you guess the number in ," + count + " turns")
  }
}