function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];

    return selection[Math.floor(Math.random()*selection.length)]
}

function updateScore(winner, playerSelection, computerSelection) {
    if (winner === "player") {
        player++;
        playerScore.textContent = `Player: ${player}`;
        return `${playerSelection} beats ${computerSelection}`;
    } else if (winner === "computer") {
        computer++;
        computerScore.textContent = `Computer: ${computer}`;
        return `${computerSelection} beats ${playerSelection}`;
    }
}

function playRound(playerSelection, computerSelection) {
    const rockIco = String.fromCodePoint(9994);
    const paperIco = String.fromCodePoint(9995);
    const scissorsIco = String.fromCodePoint(9996);

    if (playerSelection === computerSelection) {
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

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                playerPick.textContent = rockIco;
                computerPick.textContent = scissorsIco;
                paragraph.textContent = updateScore("player", playerSelection, computerSelection);
                return "You Win!"
            } else if (computerSelection === "Paper") {
                playerPick.textContent = rockIco;
                computerPick.textContent = paperIco;
                paragraph.textContent = updateScore("computer", playerSelection, computerSelection);
                return "You Lose!"
                    }
        case "Paper":
            if (computerSelection === "Rock") {
                playerPick.textContent = paperIco;
                computerPick.textContent = rockIco;
                paragraph.textContent = updateScore("player", playerSelection, computerSelection);
                return "You Win!"
            } else if (computerSelection === "Scissors") {
                playerPick.textContent = paperIco;
                computerPick.textContent = scissorsIco;
                paragraph.textContent = updateScore("computer", playerSelection, computerSelection);
                return "You Lose!"
            }
        case "Scissors":
            if (computerSelection === "Paper") {
                playerPick.textContent = scissorsIco;
                computerPick.textContent = paperIco;
                paragraph.textContent = updateScore("player", playerSelection, computerSelection);
                return "You Win!"
            } else if (computerSelection === "Rock") {
                playerPick.textContent = scissorsIco;
                computerPick.textContent = rockIco;
                paragraph.textContent = updateScore("computer", playerSelection, computerSelection);
                return "You Lose!"
            }
    }
}

function resetGame() {
    player = 0;
    computer = 0;

    heading.textContent = "Rock, Paper or Scissors?";
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
const display = document.querySelector('#scoreboard');
const heading = document.querySelector('#heading');
const paragraph = document.querySelector('#paragraph');

const playerPick = document.querySelector('#playerPick');
const computerPick = document.querySelector('#computerPick');

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

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