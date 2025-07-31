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

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const paragrahp = document.createElement("p");
        
    if (humanChoice == "paper" && computerChoice == "rock") {
        paragrahp.textContent = "ganaste";
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "scissors") {
        paragrahp.textContent = "ganaste";
        humanScore++;
    }else if (humanChoice == "scissors" && computerChoice == "paper") {
        paragrahp.textContent = "ganaste";
        humanScore++;
    }else if (humanChoice == computerChoice) {
        paragrahp.textContent = "empate";
    }else {
        paragrahp.textContent = "perdiste";
        computerScore++;
    }
    
     div.appendChild(paragrahp);    
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const div = document.querySelector(".div");
const result = document.createElement("p");

rock.addEventListener("click", () => playerSelection("rock"));

paper.addEventListener("click", () => playerSelection("paper"));

scissors.addEventListener("click", () => playerSelection("scissors"));

function playerSelection(selected) {
    playRound(selected, getComputerChoice());
    if (humanScore < 5 && computerScore < 5) {
        result.textContent = `tu: ${humanScore}, la computadora: ${computerScore}`;
        div.appendChild(result);
    } else if (humanScore >= 5 && computerScore < 5) {
        result.textContent = `tu ganas: ${humanScore} a ${computerScore}`;
    } else if (humanScore < 5 && computerScore >= 5) {
        result.textContent = `tu pierdes: ${humanScore} a ${computerScore}`;
    } else {
        result.textContent = `empate: ${humanScore} a ${computerScore}`;
    };
};