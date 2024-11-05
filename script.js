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

//logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

//logic to play the entire game
function playGame() {
    //reset scores at the start
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        // play 5 rounds
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    //declare the final winner
    if (humanScore > computerScore) {
        console.log(`You are the overall winner! Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`The computer wins! Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a draw! Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

//start 
playGame();