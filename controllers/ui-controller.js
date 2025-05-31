import "../css/style.css"

import {
  getActivePlayer,
  humanPlayer,
  computerPlayer,
  togglePlayerStates,
  playerAttack,
  computerAttack,
  getWinner,
  startGame,
} from "./game-controller.js"

const grids = Array.from(document.getElementsByClassName("board-squares"));



const initializeGrids = () => {
  for (const [index, grid] of grids.entries()) {
    grid.textContent = "";

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        if (index === 0) {
          gridSquare.classList.add("grid-square-human");
          gridSquare.dataset.y = y.toString();
          gridSquare.dataset.x = x.toString();
          grid.appendChild(gridSquare);
        } else if (index === 1) {
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


const registerHumanAttackingComputer = (attack, square) =>{
    if(attack){
      square.classList.add("grid-square--attacked")
      return true;
    } else{
      square.classList.add("grid-square--missed");
      togglePlayerStates();
    }
    return false;
}

const playerBoard = document.getElementById("player-gameboard")
const computerBoard = document.getElementById("computer-gameboard")

const registerComputerAttackingHuman = (attack, square) =>{

    if (attack){
      square.classList.add("grid-square--attacked")
      if(getWinner()){
        displayWinner();
      } else{
        computerAttack();
      }
    } else{
      square.classList.add("grid-square--missed")
      togglePlayerStates()
    }
}

computerBoard.addEventListener("click", (event) => {
  const square = event.target;
  const gridSquare = square.classList.contains("grid-square");

  const isAlreadyAttacked = square.classList.contains("grid-square--attacked")
      || square.classList.contains("grid-square--missed");
  const isHumanTurn = getActivePlayer() === humanPlayer;
  const gameHasWinner = !!getWinner();

  if (!gridSquare || isAlreadyAttacked || !isHumanTurn || gameHasWinner) {
    return;
  }

  const x = square.dataset.x;
  const y = square.dataset.y;
  const hit = playerAttack(x, y, square)

  if (getWinner()) {
    return;
  }
  if (hit){
    return;
  }

  computerAttack();

})

const winnerDiv = document.querySelector(".winner")
const resultsDiv = document.querySelector(".game-results")

const displayWinner = () =>{
    const winner = getWinner()
  if(winner ===humanPlayer){
    winnerDiv.textContent = "Congratulations! You've won!"
  } else if (winner === computerPlayer){
    winnerDiv.textContent = "That's too bad. You've lost!";
  }
  resultsDiv.classList.remove("game-results--hidden")
}

const resetButton = document.getElementById("reset-button");
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
  resultsDiv.classList.add(".game-results--hidden")
  startGame()
  showResetButton()

}

export{
  showPlayerShips,
  initializeGrids,
    registerComputerAttackingHuman,
    registerHumanAttackingComputer,
    displayWinner,
    hideResetButton,

}