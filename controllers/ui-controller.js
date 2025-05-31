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
console.log(grids);

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

const playerBoard = document.getElementById("player-gameboard")
const computerBoard = document.getElementById("computer-gameboard")

const registerHumanAttackingComputer = (attack, target) =>{
    if(attack){
      target.classList.add("grid-square--attacked")
      return true;
    }
    target.classList.add("grid-square--missed")
    togglePlayerStates()
}

const registerComputerAttackingHuman = (attack, target) =>{
    const square = playerBoard.children[y*10 + x];
    if (attack){
      square.classList.add("grid-square--attacked")
      computerAttack()
      return;
    }

    square.classList.add("grid-square--missed")
  togglePlayerStates()
}

computerBoard.addEventListener("click", (event) => {
  const square = event.target;
  if(
      !square.classList.contains("grid-square") ||
      square.classList.length > 2 ||
      getActivePlayer() === computerPlayer ||
      getWinner()
  ) {
    return;
  }

  const hit = playerAttack(square.dataset.x, square.dataset.y, square)

  if (hit){
    return;
  }

  computerAttack();

})

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