const Gameboard = require('../game-classes/gameboard');

class Player {
  constructor(type, gameboard) {
    if(typeof type !== "string"){
      throw new Error("Error: Player type must be a string.");
    }

    this.type = type;
    this.gameboard = new Gameboard();
  }


}

module.exports = Player;