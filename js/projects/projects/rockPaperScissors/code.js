const container = document.querySelector('.container');
const loopVideo = document.querySelector('.loop');
const loopSource = loopVideo.querySelector('source');
const cellScorePlayer = document.querySelectorAll('.cellScorePlayer');
const cellScoreComputer = document.querySelectorAll('.cellScoreComputer');
const vsText = document.createElement('p');
const result = document.createElement('h1');

document.querySelector('.content').appendChild(vsText);
document.querySelector('.content').appendChild(result);

const options = ["Rock", "Paper", "Scissors"];

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
  loopVideo.addEventListener("ended", () => {
    loopVideo.querySelector('source').setAttribute('src', './media/loop.mp4');
    loopVideo.load();
  });
};

let playerWins = 0;
let computerWins = 0;

const gameResult = (player, computer) => {
  if (playerWins < 5 && computerWins < 5) {
    if (player === computer || player == 'NA') {
      result.textContent = "DRAW";
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      playerWins++;
      cellScorePlayer[playerWins - 1].textContent = "X";
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
      cellScoreComputer[computerWins - 1].textContent = "X";
      result.textContent = `COMPUTER WINS!!!`;
      if (computer === "Paper" && player === "Rock") {
        loadVideo("rockVsPaper");
      } else if (computer === "Scissors" && player === "Paper") {
        loadVideo("paperVsScis");
      } else if (computer === "Rock" && player === "Scissors") {
        loadVideo("sicsVsRock");
      }
    }
  } else {
    container.style.display = "none";
    document.body.style.backgroundColor = '#000';
    const divEnd = document.createElement('div');
    const h1End = document.createElement('h1');

    document.body.appendChild(divEnd);
    divEnd.appendChild(h1End);

    divEnd.setAttribute('class', 'end');

    h1End.textContent = playerWins >= 5 ? "YOU WIN!!!" : "COMPUTER WINS!!!";
  }
};

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', () => {
    const computerSelection = options[Math.floor(Math.random() * 3)];
    const playerSelection = btn.id.charAt(0).toUpperCase() + btn.id.slice(1);
    gameResult(playerSelection, computerSelection);
    vsText.innerHTML = `
        YOUR CHOICE: <strong>${playerSelection.toUpperCase()}</strong> <br>
        VS <br>
        COMPUTER'S CHOICE: <strong>${computerSelection.toUpperCase()}</strong>`;
  });
});
