const Player = require('../game-classes/player.js');

describe('Player class tests', () => {
  let player = new Player("human");
  let computer = new Player("computer");

  test("Player constructor initialization: gameboards", () => {
    expect(player.gameboard).toBeDefined()
    expect(computer.gameboard).toBeDefined()

  })
  test("Player constructor initialization: type", () => {
    expect(player.type).toBe("human");
  })

  test("Player constructor initialization: type 2", () => {
    expect(computer.type).toBe("computer");
  })

  test("Player constructor initialization: type 3", () => {
    expect(()  => new Player(73)).toThrow("Error: Player type must be a string.");
  })
})

