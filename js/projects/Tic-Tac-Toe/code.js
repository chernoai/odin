const pvpBtn = document.querySelector('.pvp_btn');
const pvaiBtn = document.querySelector('.pvai_btn');
const playScreen = document.querySelector('.play_screen');

pvpBtn.addEventListener('click', () => {
  const tokens = document.querySelectorAll('.token');
  tokens.forEach(token => {
    token.setAttribute("draggable", "true");
  });
  playScreen.style.zIndex = '10';
});

let pvaiGameMode = false

pvaiBtn.addEventListener('click', () => {
  pvaiGameMode = true
  const xtokens = document.querySelectorAll('.x_token');
  xtokens.forEach(token => {
    token.setAttribute("draggable", "true");
  });
  playScreen.style.zIndex = '10';
});


//! |||||||||||||| Mover fichas dinamicamente ||||||||||||||| 
const dinamicCells = document.querySelectorAll('.dinamic_cell');

const moveDinamicCells = () => {
  const occupiedAreas = []; // Almacena las áreas de la cuadrícula ocupadas por las celdas dinámicas
  dinamicCells.forEach(cell => {
    let randomRow, randomColumn;
    do {
      randomRow = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio para las filas (1-3)
      randomColumn = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio para las columnas (1-3)
    } while (occupiedAreas.includes(`${randomRow}/${randomColumn}`)); // Repite el proceso si el área generada ya está ocupada

    cell.style.gridArea = `${randomRow} / ${randomColumn}`; // Cambia la posición de la celda en la cuadrícula
    occupiedAreas.push(`${randomRow}/${randomColumn}`); // Agrega el área ocupada a la lista
  });
};
setInterval(moveDinamicCells, 1200);


//! |||||||||||||  Mover fichas sobre el tablero |||||||||||| 
const playCells = document.querySelectorAll('.play_cell');

playCells.forEach(cell => {
  cell.addEventListener('dragover', e => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador al arrastrar sobre la celda
  });

  // Escucha el evento dragenter en cada celda de juego
  cell.addEventListener('dragenter', e => {
    e.preventDefault();
  });
  cell.addEventListener('drop', e => {
    e.preventDefault();
    const tokens = document.querySelectorAll('.token');
    let cellCount = cell.childElementCount;
    // Recorre todos los tokens
    tokens.forEach(token => {
      // Agrega un event listener al evento 'dragend' para cada token
      token.addEventListener('dragend', () => {
        if (!cellCount > 0) {
          cell.appendChild(token);
          cellCount = cell.childElementCount;
          //! |||  Mover fichas sobre el tablero de la IA ||| 
          if (pvaiGameMode) {
            const oTokenDiv = document.querySelector('.o_tokens');
            const playCells = Array.from(document.querySelectorAll('.play_cell'));

            // Filtrar las celdas de juego vacías
            const emptyCells = playCells.filter(cell => cell.childElementCount === 0);

            if (emptyCells.length > 0) {
              // Seleccionar una celda de juego aleatoria
              const randomCellIndex = Math.floor(Math.random() * emptyCells.length);
              const randomCell = emptyCells[randomCellIndex];

              // Mover un token O aleatorio desde oTokenDiv a la celda seleccionada
              const oTokensArray = Array.from(oTokenDiv.children);
              if (oTokensArray.length > 0) {
                const randomOTokenIndex = Math.floor(Math.random() * oTokensArray.length);
                const randomOToken = oTokensArray[randomOTokenIndex];
                randomCell.appendChild(randomOToken);
              } else {
                const oTokens = document.querySelectorAll('.o_token')
                const randomOTokenIndex = Math.floor(Math.random() * oTokens.length);
                const randomOToken = oTokens[randomOTokenIndex];
                randomCell.appendChild(randomOToken);
              }
            }
          }
          //! ||||||||||||  CHECKEAR CELDAS ||||||||||||||| 
          const board = cell.parentElement.parentNode;

          const firstRow = board.children[0];
          const secondRow = board.children[1];
          const thirdRow = board.children[2];

          const cell1 = firstRow.children[0].children[0]
          const cell2 = firstRow.children[1].children[0]
          const cell3 = firstRow.children[2].children[0]

          const cell4 = secondRow.children[0].children[0]
          const cell5 = secondRow.children[1].children[0]
          const cell6 = secondRow.children[2].children[0]

          const cell7 = thirdRow.children[0].children[0]
          const cell8 = thirdRow.children[1].children[0]
          const cell9 = thirdRow.children[2].children[0]

          const checkThreeInARow = (cell1, cell2, cell3) => {
            // Verifica que las celdas no sean null
            if (cell1 && cell2 && cell3) {
              if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent) {
                cell1.classList.add('win_token')
                cell2.classList.add('win_token')
                cell3.classList.add('win_token')

                cell1.parentNode.classList.add('win_cell');
                cell2.parentNode.classList.add('win_cell');
                cell3.parentNode.classList.add('win_cell');

                tokens.forEach(token => {
                  token.removeAttribute("draggable");
                });
          //! ||||||||||||  PANTALLA DE WIN ||||||||||||||| 

              }
            }
          };
          function winCheck() {
            checkThreeInARow(cell1, cell4, cell7)
            checkThreeInARow(cell2, cell5, cell8)
            checkThreeInARow(cell3, cell6, cell9)
            checkThreeInARow(cell1, cell2, cell3)
            checkThreeInARow(cell4, cell5, cell6)
            checkThreeInARow(cell7, cell8, cell9)
            checkThreeInARow(cell3, cell5, cell7)
            checkThreeInARow(cell1, cell5, cell9)
          }
          winCheck()
        }
      });
    });
  });
});