function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if(choice === 0 ) return "rock"
  else if (choice === 1) return "paper"
  else return "scissor"
}


function getHumanChoice () {
  return prompt("enter rock, paper or scissor")
}

function playRound() {
  let humanScore =  0
  let computerScore = 0
  while(humanScore < 3 && computerScore < 3){
    let humanChoice = getHumanChoice().toLowerCase();   // take input every round
    let computerChoice = getComputerChoice();           // new computer choice every round

    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor"){
      return alert("Please enter the correct input")
    }
   
    if(humanChoice === "rock" && computerChoice === "paper" ||humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock" ){
      computerScore++
      // return alert(`You lose! ${computerChoice} beats ${humanChoice}, computer score =  ${computerScore}`)
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
    }
    else if(computerChoice === "rock" && humanChoice === "paper" ||computerChoice === "paper" && humanChoice === "scissor" || computerChoice === "scissor" && humanChoice === "rock" ){
      humanScore++
      // return alert(`You win! ${humanChoice} beats ${computerChoice}, human score =  ${humanScore}`)
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
    }
     else if (humanChoice === computerChoice) {
      console.log("Draw")
     }
  }
   if (humanScore === 3) {
    alert("Congratulations! You won the best of three match!");
  } else {
    alert("Better luck next time! You lost the best of three match!");
  }
} 


playRound();
