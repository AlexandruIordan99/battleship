const Gameboard = require('./gameboard');

class Player {
  constructor(type, gameboard) {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}

module.exports = Player;