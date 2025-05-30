const Gameboard = require("../game-classes/gameboard");
const Ship = require("../game-classes/ship");

describe('Gameboard testing suite', () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });
  test("Gameboard constructor initialization - Arrays", () => {
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

  test("Gameboard constructor initialization - all except arrays", () => {
    expect(gameboard.ships).toEqual([]);
    expect(gameboard.missedAttacks).toEqual([]);
    expect(gameboard.receivedAttacks).toEqual([]);
  })

  test("Ship placement randomization", () => {
    const {x, y, orientation} = gameboard.randomizeShipLocation();
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(10);

    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(10);

    expect(["vertical", "horizontal"]).toContain(orientation);
  })

  test("Ship orientation to coordinate relationship: horizontal", () => {
    let horizontalShip = gameboard.randomizeShipLocation = () =>({x : 0,y : 0, orientation: "horizontal"});
    const ship = new Ship(3); // Assuming Ship constructor accepts length
    gameboard.placeShips(ship);
    expect(gameboard.board[0][0]).toBe(ship);
    expect(gameboard.board[0][1]).toBe(ship);
    expect(gameboard.board[0][2]).toBe(ship);
    expect(gameboard.ships).toContain(ship);
  })

  test("Ship orientation to coordinate relationship: vertical", () => {
    let verticalShip = gameboard.randomizeShipLocation = () =>({x : 2, y : 2, orientation: "vertical"})
    const ship = new Ship(3); // Assuming Ship constructor accepts length
    gameboard.placeShips(ship);
    expect(gameboard.board[2][2]).toBe(ship);
    expect(gameboard.board[3][2]).toBe(ship);
    expect(gameboard.board[4][2]).toBe(ship);
    expect(gameboard.ships).toContain(ship);
  })

})
