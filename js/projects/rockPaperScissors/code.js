const container = document.querySelector('.container');
const content = document.querySelector('.content');
const loopVideo = document.querySelector('.loop');
const loopSource = loopVideo.querySelector('source');
let loopSrc = loopSource.getAttribute('src');

const vsText = document.createElement('p');
const result = document.createElement('p');
const score = document.createElement('p');

content.appendChild(score);
content.appendChild(vsText);
content.appendChild(result);

let computerWins = 0;
let playerWins = 0;

const options = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3) + 1 - 1] || "NA";
};

score.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins} `;

// Load Video Function
const videos = {
  rockVsSics: './media/rockVsScis.mp4',
  paperVsRock: './media/paperVsRock.mp4',
  sicsVsPaper: './media/scisvsPaper.mp4',
  rockVsPaper: './media/rockVsPaper.mp4',
  paperVsScis: './media/paperVsScis.mp4',
  sicsVsRock: './media/scisVsRock.mp4'
};

const loadVideo = (vs) => {
  loopVideo.querySelector('source').setAttribute('src', videos[vs]);
  loopVideo.load();
  loopVideo.addEventListener("ended", (event) => {
    loopVideo.querySelector('source').setAttribute('src', './media/loop.mp4');
    loopVideo.load();
  });
};

// Game Result Function
const gameResult = (player, computer) => {
  if (player === computer || player == 'NA') {
    result.textContent = "DRAW";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    playerWins++;
    result.textContent = `YOU WIN!!!`;
    if (player === "Rock" && computer === "Scissors") {
      loadVideo("rockVsSics");
    } else if (player === "Paper" && computer === "Rock") {
      loadVideo("paperVsRock");
    } else if (player === "Scissors" && computer === "Paper") {
      loadVideo("sicsVsPaper");
    }
  } else {
    computerWins++;
    result.textContent = `COMPUTER WINS!!!`;
    if (computer === "Paper" && player === "Rock") {
      loadVideo("rockVsPaper");
    } else if (computer === "Scissors" && player === "Paper") {
      loadVideo("paperVsScis");
    } else if (computer === "Rock" && player === "Scissors") {
      loadVideo("sicsVsRock");
    }
  }
  score.textContent = `PLAYER SCORE: ${playerWins} COMPUTER SCORE: ${computerWins}`;
};

// Player Selection Function
let playerSelection = document.querySelectorAll('img');
playerSelection.forEach(btn => {
  btn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playerSelection = btn.id[0].toUpperCase() + btn.id.slice(1);
    gameResult(playerSelection, computerSelection);
    vsText.innerHTML = `
  YOUR CHOICE: <strong>${playerSelection.toUpperCase()}</strong> <br>
  VS <br>
  COMPUTER'S CHOICE: <strong>${computerSelection.toUpperCase()}</strong>`;
  });
});
