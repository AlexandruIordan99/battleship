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
import realPlayer from "../game-classes/gameboard";

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

