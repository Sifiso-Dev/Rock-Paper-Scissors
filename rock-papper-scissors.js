// Function for computer to randomly generate rock, papper or scissor
let computerSelection = "";

function computerPlay () {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomNum == 1) {
        return 'Rock';
    } else if (randomNum == 2) {
        return 'Papper';
    } else {
        return 'Scissor';
    }
}

computerSelection = computerPlay();

// Function for one round between user and computer

let playerSelection = ("Please choose between Rock, Papper or Scissor: ");

function playRound (playerSelection, computerSelection) {
    let result = "";

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        result = "It's a tie!!!";
    } else if (playerSelection.toLowerCase() == 'papper' && computerSelection.toLowerCase() == 'rock') {
        result = 'You win! Papper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'papper' && computerSelection.toLowerCase() == 'scissor') {
        result = 'You lose! Scissor beats Papper!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'papper') {
        result = 'You lose! Papper beats Rock!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissor') {
        result = 'You win! Rock beats scissor!';
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'rock') {
        result = 'You lose! Rock beats scissor!';
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'papper') {
        result = 'You win! Scissor beats papper!';
    }
}    

function game () {

}


