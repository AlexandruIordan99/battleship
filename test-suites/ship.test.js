const Ship = require("../game-classes/ship.js");

describe("Ship", () =>{
  const ship = new Ship(3);

  test("constructor initialization", () =>{
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  })

  test("hit call test", () =>{
    ship.hit();
    expect(ship.hits).toBe(1);
  })

  test("Not sinking after 1 hit", () =>{
    ship.hit();
    expect(ship.sunk).toBe(false);
  })

  test("Saving number of hits", () =>{
    ship.hits=0;
    for (let i = 0; i < 2; i++) {
      ship.hit();
    }
    expect(ship.hits).toBe(2);
  })

  test("Sinking after 3 hits", () =>{
    ship.hits=0;
    for (let i = 0; i < 3; i++) {
      ship.hit();
      console.log(ship.hits);
    }
    expect(ship.isSunk()).toBe(true);
  })

})