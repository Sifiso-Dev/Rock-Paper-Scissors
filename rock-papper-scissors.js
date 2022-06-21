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

let playerSelection = prompt("Please choose between Rock, Papper or Scissor: ");

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("It's a tie!!!");
    } else if (playerSelection.toLowerCase() == 'papper' && computerSelection.toLowerCase() == 'rock') {
        console.log('You win! Papper beats Rock!');
    } else if (playerSelection.toLowerCase() == 'papper' && computerSelection.toLowerCase() == 'scissor') {
        console.log('You lose! Scissor beats Papper!');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'papper') {
        console.log('You lose! Papper beats Rock!');
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissor') {
        console.log('You win! Rock beats scissor!');
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'rock') {
        console.log('You lose! Rock beats scissor!');
    } else if (playerSelection.toLowerCase() == 'scissor' && computerSelection.toLowerCase() == 'papper') {
        console.log('You win! Scissor beats papper!');
    }
}    

console.log(playRound(playerSelection, computerSelection));


