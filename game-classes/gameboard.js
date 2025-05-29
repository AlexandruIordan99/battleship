class Gameboard{
  constructor(){
    this.board = Array(10)
        .fill()
        .map(() => new Array(10).fill(null))
    this.missedAttacks= [];
    this.receivedAttacks= [];
    this.ships= [];
  }

  placeShips(x, y, orientation, ship){

  }

  registerHit(x, y){
    return true;
  }

  registerMiss(x, y){

  }

  reportSinking(){

  }

  areAllShipsSunk(){

  }

}

module.exports = Gameboard;