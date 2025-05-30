class Gameboard{
  constructor(){
    this.board = Array(10)
        .fill()
        .map(() => new Array(10).fill(null))
    this.missedAttacks= [];
    this.receivedAttacks= [];
    this.ships= [];
  }

  placeShips(ship){
    let {x,y, orientation} = this.randomizeShipLocation()
    if(orientation !== "vertical" && orientation !== "horizontal"){
      throw new Error("Error: orientation must be vertical or horizontal.");
    }


    if (orientation === "horizontal"){

    } else if (orientation === "vertical") {

    }

  }

  randomizeShipLocation(){
    const x = Math.floor(Math.random() *10);
    const y = Math.floor(Math.random() *10);
    const orientation =
        (Math.random() < 0.5) ? "vertical" : "horizontal";
    return {x, y, orientation};
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