const options = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

const rps = (player, computer) => {
  player = options[player - 1] || "NA";
  computer = options[computer - 1] || "NA";

  console.log(`Player: ${player}\nVS\nComputer: ${computer}`);

  if (player === computer) {
    console.log("DRAW");
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    console.log("Player Wins!");
  } else {
    console.log("Computer Wins!");
  }
};

const playerSelection = parseInt(prompt(`Choose a number:\n1) Rock\n2) Paper\n3) Scissors`), 10);
const computerSelection = getComputerChoice();
rps(playerSelection, computerSelection);
