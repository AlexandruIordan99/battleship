import "../css/style.css"

import {
  getActivePlayer,
  humanPlayer,
  computerPlayer,
  toggleActivePlayer,
  playerAttack,
  computerAttack,
  getWinner,
  startGame,
} from "./game-controller"

const grids = document.querySelectorAll(".grid-square");

const initializeGrids = () => {
  for (const [index, grid] of grids.entries()) {
    grid.textContent = "";

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        if (index === 1) {
          gridSquare.classList.add("grid-square-computer");
          gridSquare.dataset.y = y.toString();
          gridSquare.dataset.x = x.toString();
          grid.appendChild(gridSquare);
        }
      }
    }
  }
}

const showPlayerShips = () => {
  for (let y = 0; y < humanPlayer.gameboard.board.length; y++) {
    for (let x = 0; x < 10; x++) {
      if (humanPlayer.gameboard.board[y][x]) {
        grids[0].children[y * 10 + x].classList.add("grid-square-ship");
      }
    }
  }
}

const playerBoard = document.querySelector(".board--player .board__squares")
const computerBoard = document.querySelector(".board--computer .board__squares")

const registerComputerAttackingHuman = () =>{

}

const registerHumanAttackingComputer = () =>{

}

const displayWinner = () =>{

}


const restartGame = () => {

}


const resetButton = document.querySelector("#reset-button");

export{
  showPlayerShips,
  initializeGrids,
    registerComputerAttackingHuman,
    registerHumanAttackingComputer,
    displayWinner,
}