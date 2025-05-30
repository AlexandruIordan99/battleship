const Gameboard = require("../game-classes/gameboard");
const Ship = require("../game-classes/ship");

describe('Gameboard testing suite', () => {
  let gameboard = new Gameboard();
  test("Gameboard constructor initialization - Arrays", () =>{
    expect(gameboard.board).toEqual(
    [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]
    );
  })

  test ("Gameboard constructor initialization - all except arrays", () =>{
    expect(gameboard.ships).toEqual([]);
    expect(gameboard.missedAttacks).toEqual([]);
    expect(gameboard.receivedAttacks).toEqual([]);
  })

  test("Ship placement orientation", () =>{
    expect(() => new Gameboard().placeShips(1,1, "five guys")
        .toThrow("Error: orientation must be vertical or horizontal."));
  })
})
