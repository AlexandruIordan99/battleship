const Ship = require("../game-classes/ship.js");

describe("Ship", () =>{
  const ship = new Ship(3);

  test("constructor initialization", () =>{
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  })

})