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
})
