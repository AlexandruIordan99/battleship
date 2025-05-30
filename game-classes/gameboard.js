class Gameboard{
  constructor(){
    this.board = Array(10)
        .fill()
        .map(() => new Array(10).fill(null))
    this.missedAttacks= [];
    this.receivedAttacks= [];
    this.ships= [];
  }

  placeShips(y, x, orientation, ship){
    let i =Math.floor(Math.random()*10);
    if(orientation !== "vertical" || orientation !== "horizontal"){
      throw new Error("Error: orientation must be vertical or horizontal.");
    }
    if (orientation === "horizontal"){

    } else if (orientation === "vertical") {

    }

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