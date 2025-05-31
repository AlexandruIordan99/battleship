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

const playerBoard = document.querySelector(".player-board .board__squares")
const computerBoard = document.querySelector(".computer-board .board__squares")

const registerComputerAttackingHuman = (attack, target) =>{

}

const registerHumanAttackingComputer = (attack, target) =>{

}

const winnerDiv = document.querySelector(".winner")
const resultsDiv = document.querySelector(".results")

const displayWinner = () =>{
    const winner = getWinner()
  if(winner ===humanPlayer){
    winnerDiv.textContent = "Congratulations! You've won!"
  } else{
    winnerDiv.textContent = "That's too bad. You've lost!";
  }
  resultsDiv.classList.remove("game-results--hidden")
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", ()=>{
  startGame();
})

const hideResetButton = () =>{
  resetButton.classList.add("reset-button--hidden")
}

const showResetButton = () =>{
  resetButton.classList.remove("reset-button--hidden")
}

const restartGame = () => {
  resultsDiv.classList.add("game-results--hidden")
  startGame()
  showResetButton()
}




export{
  showPlayerShips,
  initializeGrids,
    registerComputerAttackingHuman,
    registerHumanAttackingComputer,
    displayWinner,
}