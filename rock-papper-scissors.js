// Function for computer to randomly generate rock, papper or scissor


function computerPlay () {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'papper';
    } else {
        return 'scissor';
    }
}

// Function for one round between user and computer


function playRound (playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == computerSelection) {
        result = "It's a tie!!!";
    } else if (playerSelection == 'papper' && computerSelection == 'rock') {
        result = 'You win! Papper beats Rock!';
    } else if (playerSelection == 'papper' && computerSelection == 'scissor') {
        result = 'You lose! Scissor beats Papper!';
    } else if (playerSelection == 'rock' && computerSelection == 'papper') {
        result = 'You lose! Papper beats Rock!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        result = 'You win! Rock beats scissor!';
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        result = 'You lose! Rock beats scissor!';
    } else if (playerSelection == 'scissor' && computerSelection == 'papper') {
        result = 'You win! Scissor beats papper!';
    }

    return result;
}    
// A function to loop the playRound function 5 times

function game (playerSelection, computerSelection) {
    let scorePlayer = 0;
    let scoreComp = 0;
    let result = "";

    let userSelection = prompt("Please choose between Rock, Papper or Scissor: ");
    let playerSelection = userSelection.toLocaleLowerCase();

    let computerSelection = "";
    computerSelection = computerPlay();

    for (let i = 0; i < 5; i++) {
        playRound();

        if (result == "It's a tie!!!") {
            scorePlayer += 0;
            scoreComp += 0;
        } else if (result.slice(0, 7) == 'You win') {
            scorePlayer += 1;
            scoreComp += 0;
        }else {
            scorePlayer += 0;
            scoreComp += 1;
        }
    }

    return scoreComp;
    return scorePlayer;

}

game();

// Displaying who's the winner
if (scorePlayer == scoreComp) {
    console.log("No one won! It's a tie!");
} else if (scorePlayer > scoreComp) {
    console.log('Congatulations! You won!');
} else {
    console.log('You lost! The computer won!');
}


