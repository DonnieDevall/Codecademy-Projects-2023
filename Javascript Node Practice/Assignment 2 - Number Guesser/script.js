let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will be called at the start of each new round in order to generate the new secret target number.
function generateTarget() {
  return Math.floor(Math.random() * 10);
} //This works as intended

//Compares guesses and the number closest to the secretNumber is the winner, ties are in favor of human.
let compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  if (humanGuess === computerGuess) {
    return true;
  } else if (Math.abs(secretNumber - humanGuess) < Math.abs(secretNumber - computerGuess)){
    return true;
  } else {
    return false;
  }
}

// Updates score based on winner
let updateScore = (gameWinner) => {
  if (gameWinner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

// Updates current round count
let advanceRound = () => currentRoundNumber++;


