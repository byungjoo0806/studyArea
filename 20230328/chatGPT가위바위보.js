// Function to generate the computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play one round of the game
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter rock, paper, or scissors:");
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(result);
      
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
    
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is tied!");
    }
  }
  
  // Call the game function to play the game
  game();