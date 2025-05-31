import Gameboard from "../game-classes/gameboard";
import Player from "../game-classes/player"
import Ship from "../game-classes/ship";

let humanPlayer = new Player();
let computerPlayer = new Player();

import {
  displayWinner, hideResetButton,
  initializeGrids, registerComputerAttackingHuman, registerHumanAttackingComputer,
  showPlayerShips
} from "./ui-controller";


let activePlayer = humanPlayer;
let defendingPlayer = computerPlayer;

const getActivePlayer = () => activePlayer;

const togglePlayerStates = () => {
  [activePlayer, defendingPlayer] = [defendingPlayer, activePlayer];

}

const placeShips = (player) => {
  const shipLengthArray = [2, 3, 3, 4, 5]
  for (const shipLength of shipLengthArray) {
    const ship = new Ship(shipLength);
    player.gameboard.placeShips(ship);
  }
}

const populateGameboards = () => {
  placeShips(humanPlayer);
  placeShips(computerPlayer);
}

const playerAttack = (x, y, target) =>{
  hideResetButton();
  const playerAttack = computerPlayer.gameboard.registerHit(x,y);
  displayWinner();
  return registerHumanAttackingComputer(playerAttack, target);
}

const getRandomCoordinates = () => {
  const x = Math.floor(Math.random() * 10)
  const y = Math.floor(Math.random() * 10)

  return [x, y]
}

const computerAttack = () =>{
  let coordinates;
  if(getWinner()){
    displayWinner();
    return;
  }

  do{
    coordinates = getRandomCoordinates();
  } while (humanPlayer.gameboard.receivedAttacks.some(
      (innerArray) => JSON.stringify(innerArray) === JSON.stringify(coordinates))){
    const [x, y] = coordinates;
    const computerAttack = humanPlayer.gameboard.registerHit(x,y);
  }
}

const getWinner = () => {
  if (defendingPlayer.gameboard.areAllShipsSunk() === true){
    return activePlayer;
  }
}


const startGame = () => {
  activePlayer = humanPlayer;
  defendingPlayer = computerPlayer;

  activePlayer.gameboard = new Gameboard();
  defendingPlayer.gameboard = new Gameboard();

  populateGameboards();
  initializeGrids();
  showPlayerShips();
}


export {
    humanPlayer,
    computerPlayer,
    getActivePlayer,
    togglePlayerStates,
    populateGameboards,
    playerAttack,
    computerAttack,
    startGame,
    getWinner,
}
