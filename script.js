function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];

    return selection[Math.floor(Math.random()*selection.length)]
}

function playRound(playerSelection, computerSelection) {
    const rockIco = String.fromCodePoint(9994);
    const paperIco = String.fromCodePoint(9995);
    const scissorsIco = String.fromCodePoint(9996);

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        player++;
        paragraph.textContent = "Rock beats Scissors";
        playerPick.textContent = rockIco;
        computerPick.textContent = scissorsIco;
        playerScore.textContent = `Player: ${player}`;
        return "You Win!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        player++;
        paragraph.textContent = "Paper beats Rock";
        playerPick.textContent = paperIco;
        computerPick.textContent = rockIco;
        playerScore.textContent = `Player: ${player}`;
        return "You Win!"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        player++;
        paragraph.textContent = "Scissors beats Paper";
        playerPick.textContent = scissorsIco;
        computerPick.textContent = paperIco;
        playerScore.textContent = `Player: ${player}`;
        return "You Win!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computer++;
        paragraph.textContent = "Paper beats Rock";
        playerPick.textContent = rockIco;
        computerPick.textContent = paperIco;
        computerScore.textContent = `Computer: ${computer}`;
        return "You Lose!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computer++;
        paragraph.textContent = "Scissors beats Paper";
        playerPick.textContent = paperIco;
        computerPick.textContent = scissorsIco;
        computerScore.textContent = `Computer: ${computer}`;
        return "You Lose!"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computer++;
        paragraph.textContent = "Rock beats Scissors";
        playerPick.textContent = scissorsIco;
        computerPick.textContent = rockIco;
        computerScore.textContent = `Computer: ${computer}`;
        return "You Lose!"
    } else {
        paragraph.textContent = `${playerSelection} ties with ${computerSelection}`;
        if (playerSelection === "Rock") {
            playerPick.textContent = rockIco;
            computerPick.textContent = rockIco;
        } else if (playerSelection === "Paper") {
            playerPick.textContent = paperIco;
            computerPick.textContent = paperIco;
        } else if (playerSelection === "Scissors") {
            playerPick.textContent = scissorsIco;
            computerPick.textContent = scissorsIco;
        }
        return "It's a draw"
    }
}

function resetGame() {
    player = 0;
    computer = 0;

    heading.textContent = "Pick your choice";
    paragraph.textContent = "First to get a score of 5 wins!"
    playerPick.textContent = String.fromCodePoint(10067);
    computerPick.textContent = String.fromCodePoint(10067);
    playerScore.textContent = `Player: ${player}`;
    computerScore.textContent = `Computer: ${computer}`;
}

// Counts the scores
let player = 0;
let computer = 0;

// The default display
const display = document.querySelector('#display');
const heading = document.createElement('h2');
heading.textContent = "Pick your choice";

const paragraph = document.createElement('p');
paragraph.textContent = "First to get a score of 5 wins!"

const playerPick = document.createElement('h1');
playerPick.textContent = String.fromCodePoint(10067);

const computerPick = document.createElement('h1');
computerPick.textContent = String.fromCodePoint(10067);

const score = document.querySelector('#score');
const playerScore = document.createElement('h3');
playerScore.textContent = `Player: ${player}`;

const computerScore = document.createElement('h3');
computerScore.textContent = `Computer: ${computer}`;

display.appendChild(heading);
display.appendChild(paragraph);
display.appendChild(playerPick);
display.appendChild(computerPick);

score.appendChild(playerScore);
score.appendChild(computerScore);

// Event Listeners
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    heading.textContent = playRound("Rock", computerPlay());
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    heading.textContent = playRound("Paper", computerPlay());
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    heading.textContent = playRound("Scissors", computerPlay());
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (player === 5) {
            alert("You won!");
            resetGame();
        } else if (computer === 5) {
            alert("You lose!");
            resetGame();
        }
    });
});