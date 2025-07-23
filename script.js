function getHumanChoice() {
    let human = prompt("select: rock, paper or scissors");
    return human.toLocaleLowerCase();
}


function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        return "rock";
    }else if (computer == 1) {
        return "paper";
    }else {
        return "scissors";
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
    function palyRound(humanChoice, computerChoice) {
    if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore++;
            console.log("perdiste, punto para la computadora");
        }else if (computerChoice == "rock") {
            humanScore++;
            console.log("ganaste, punto para ti");
        }else {
            console.log("empate");
        }
    }else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++;
            console.log("perdiste, punto para la computadora");
        }else if (computerChoice == "scissors") {
            humanScore++;
            console.log("ganaste, punto para ti");
        }else {
            console.log("empate");
        }
    }else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            console.log("perdiste, punto para la computadora");
        }else if (computerChoice == "paper") {
            humanScore++;
            console.log("ganaste, punto para ti");
        }else {
            console.log("empate");
        }
    }else {
        console.log("error, no introduciste un valor valido");
    }
}
    palyRound(getHumanChoice(), getComputerChoice());
    console.log("tu: " + humanScore + " " + "la computadora: " + computerScore);
    palyRound(getHumanChoice(), getComputerChoice());
    console.log("tu: " + humanScore + " " + "la computadora: " + computerScore);
    palyRound(getHumanChoice(), getComputerChoice());
    console.log("tu: " + humanScore + " " + "la computadora: " + computerScore);
    palyRound(getHumanChoice(), getComputerChoice());
    console.log("tu: " + humanScore + " " + "la computadora: " + computerScore);
    palyRound(getHumanChoice(), getComputerChoice());
    console.log("tu: " + humanScore + " " + "la computadora: " + computerScore);
    console.log("final: tu: " + humanScore + " la computadora: " + computerScore);
}
playGame();