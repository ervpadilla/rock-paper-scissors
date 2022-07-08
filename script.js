let player = 0;
let computer = 0;

function computerPlay() {
    const selection = ["rock", "paper", "scissors"];

    return selection[Math.floor(Math.random()*selection.length)]
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors") {
        player++;
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        player++;
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computer++;
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer++;
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer++;
        return "You Lose! Rock beats Scissors"
    } else {
        return "It's a draw"
    }
}

function game() {
    let playerSelection;

    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));        
    }

    if (player > computer) {
        console.log("You Win! Yayyyy");
    } else  if (player < computer) {
        console.log("You Lose! LMAO");
    } else {
        console.log("It's a draw!");
    }

    console.log("Player: " + player);
    console.log("Computer: " + computer);

    let answer = prompt("Would you like to try again?");
    if (answer.toLocaleLowerCase() === "yes") {
        game();
    } else {
        console.log("Good game, well played!");
    }
}

game();