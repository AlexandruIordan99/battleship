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





