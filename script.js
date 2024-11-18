//function for computer choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum <  0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//function for human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice.toLowerCase(); //to ensure the choice is not case sensitive
}

//declare player score variables
let humanScore = 0;
let computerScore = 0;

//get DOM elements
const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");
const playAgainButton = document.getElementById("play-again");

//logic to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
  
    if (humanChoice === computerChoice) {
      roundResult.textContent = `It's a tie! Both chose ${humanChoice}`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      roundResult.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
  
    //update the score
    scoreDisplay.textContent = `Score: Human ${humanScore} - ${computerScore} Computer`;
  
    //check for a winner
    if (humanScore === 5) {
      winnerDisplay.textContent = "Congratulations! You are the winner!";
      endGame();
    } else if (computerScore === 5) {
      winnerDisplay.textContent = "The computer wins the game. Better luck next time!";
      endGame();
    }
  
}
  

//end the game
function endGame() {
    //disable buttons after the game ends
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    
    //show the "play again" button
    playAgainButton.style.display = "block"
}

//reset the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  //reset the score and messages
  roundResult.textContent = "";
  scoreDisplay.textContent = "Score: Human 0 - 0 Computer";
  winnerDisplay.textContent = "";

  //enable buttons
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;

  //hide the "play again" button
  playAgainButton.style.display = "none";

}
//add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

//add event listener to the "play again" button
playAgainButton.addEventListener("click", resetGame);
