const ship = require("./gameboard");

class Gameboard{
  constructor(){
    this.board = Array(10)
        .fill()
        .map(() => new Array(10).fill(null))
    this.missedAttacks= [];
    this.receivedAttacks= [];
    this.ships= [];
  }

  placeShips(ship) {
    let {x, y, orientation} = this.randomizeShipLocation() //x and y denote starting position
    if (orientation !== "vertical" && orientation !== "horizontal") {
      throw new Error("Error: orientation must be vertical or horizontal.");
    }

    if (orientation === "horizontal") {
      let endCoordinate = x + ship.length;
      if (endCoordinate > 10) {
        throw new Error("Error: ship is outside bounds.")
      }
      for (let i = x; i < endCoordinate; i++) {
        if(this.board[y][i] !==null) {
          throw new Error("Error: a ship has already been placed there.")
        }
        this.board[y][i] = ship;
      }

    } else if (orientation === "vertical") {
      let endCoordinate = y + ship.length;
      if (endCoordinate > 10) {
        throw new Error("Error: ship is outside bounds.")
      }
      for (let i = y; i < endCoordinate; i++) {
        if(this.board[i][x] !==null) {
          throw new Error("Error: a ship has already been placed there.")
        }
        this.board[i][x] = ship
      }
    }
    this.ships.push(ship);
  }

  randomizeShipLocation(){
    const x = Math.floor(Math.random() *10);
    const y = Math.floor(Math.random() *10);
    const orientation =
        (Math.random() < 0.5) ? "vertical" : "horizontal";
    return {x, y, orientation};
  }

  registerHit(x,y){
    const hitSquare = this.board[x][y];

    this.receivedAttacks.push([x, y]);

    if (hitSquare) {
      hitSquare.hit()
      return true;
    }
    this.missedAttacks.push([x, y])
    return false;
  }


  reportSinking(){

  }

  areAllShipsSunk(){
    return this.ships.
    every(ship => ship.isSunk());
  }

}

module.exports = Gameboard;