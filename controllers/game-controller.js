import Gameboard from "../game-classes/gameboard";
import Player from "../game-classes/player"
import Ship from "../game-classes/ship";

let humanPlayer = new Player();
let computerPlayer = new Player();

let activePlayer = humanPlayer;
let defendingPlayer = computerPlayer;

const getActivePlayer = () => activePlayer;

const togglePlayerStates = () => {
  activePlayer === humanPlayer ? computerPlayer : humanPlayer
  defendingPlayer === humanPlayer ? computerPlayer : humanPlayer
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
  const playerAttack = computerPlayer.gameboard.registerHit(x,y);
}





