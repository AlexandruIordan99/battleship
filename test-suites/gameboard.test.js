const Gameboard = require("../game-classes/gameboard");

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

  test("Ship placement randomization", () =>{
    const {x, y, orientation} = gameboard.randomizeShipLocation();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(10);

    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(10);

    expect(["vertical", "horizontal"]).toContain(orientation);
  })

})
