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
  rockVsSics: './source/rockVsScis.mp4',
  paperVsRock: './source/paperVsRock.mp4',
  sicsVsPaper: './source/scisvsPaper.mp4',
  rockVsPaper: './source/rockVsPaper.mp4',
  paperVsScis: './source/paperVsScis.mp4',
  sicsVsRock: './source/scisVsRock.mp4'
};

const loadVideo = (vs) => {
  loopVideo.querySelector('source').setAttribute('src', videos[vs]);
  loopVideo.load();
  loopVideo.addEventListener("ended", () => {
    loopVideo.querySelector('source').setAttribute('src', './source/loop.mp4');
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
    const body = document.body
    body.removeChild(container)
    body.style.backgroundColor = '#000';
    const divEnd = document.createElement('div');
    const h1End = document.createElement('h1');
    const imgWin = document.createElement('img')
    document.body.appendChild(divEnd);

    divEnd.setAttribute('class', 'end');
    divEnd.appendChild(h1End);
    divEnd.appendChild(imgWin)

    if (playerWins >= 5) {
      h1End.textContent = "YOU WON!!!"
      imgWin.setAttribute('src','./source/playerWins.png' )
    }
    else {
      h1End.textContent = "COMPUTER WON!!!";
    }
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
