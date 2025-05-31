/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/game-controller.js":
/*!****************************************!*\
  !*** ./controllers/game-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerAttack: () => (/* binding */ computerAttack),\n/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer),\n/* harmony export */   getActivePlayer: () => (/* binding */ getActivePlayer),\n/* harmony export */   getWinner: () => (/* binding */ getWinner),\n/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer),\n/* harmony export */   playerAttack: () => (/* binding */ playerAttack),\n/* harmony export */   populateGameboards: () => (/* binding */ populateGameboards),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   togglePlayerStates: () => (/* binding */ togglePlayerStates)\n/* harmony export */ });\n/* harmony import */ var _game_classes_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-classes/gameboard */ \"./game-classes/gameboard.js\");\n/* harmony import */ var _game_classes_gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_classes_gameboard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_classes_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-classes/player */ \"./game-classes/player.js\");\n/* harmony import */ var _game_classes_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_classes_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_classes_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-classes/ship */ \"./game-classes/ship.js\");\n/* harmony import */ var _game_classes_ship__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_classes_ship__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-controller */ \"./controllers/ui-controller.js\");\n\n\n\n\n\n\nlet humanPlayer = new (_game_classes_player__WEBPACK_IMPORTED_MODULE_1___default())();\nlet computerPlayer = new (_game_classes_player__WEBPACK_IMPORTED_MODULE_1___default())();\n\nlet activePlayer = humanPlayer;\nlet defendingPlayer = computerPlayer;\n\nconst getActivePlayer = () => activePlayer;\n\nconst togglePlayerStates = () => {\n  [activePlayer, defendingPlayer] = [defendingPlayer, activePlayer];\n\n}\n\nconst placeShips = (player) => {\n  const shipLengthArray = [2, 3, 3, 4, 5]\n  for (const shipLength of shipLengthArray) {\n    const ship = new (_game_classes_ship__WEBPACK_IMPORTED_MODULE_2___default())(shipLength);\n    player.gameboard.placeShips(ship);\n  }\n}\n\nconst populateGameboards = () => {\n  placeShips(humanPlayer);\n  placeShips(computerPlayer);\n}\n\nconst playerAttack = (x, y, target) =>{\n  ;(0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.hideResetButton)();\n\n  const playerAttack = computerPlayer.gameboard.registerHit(x,y);\n\n  const currentWinner = getWinner()\n  if (currentWinner === humanPlayer){\n    (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.displayWinner)();\n  }\n  return (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.registerHumanAttackingComputer)(playerAttack, target);\n}\n\nconst getRandomCoordinates = () => {\n  const x = Math.floor(Math.random() * 10)\n  const y = Math.floor(Math.random() * 10)\n\n  return [x, y]\n}\n\nconst computerAttack = () =>{\n  let coordinates;\n  if(getWinner()){\n    (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.displayWinner)();\n    return;\n  }\n\n  do{\n    coordinates = getRandomCoordinates();\n  } while (humanPlayer.gameboard.receivedAttacks.some(\n      (innerArray) => JSON.stringify(innerArray) === JSON.stringify(coordinates))){\n  }\n\n  const [x, y] = coordinates;\n  const playerSquare = document.querySelector(\"#player-gameboard .board-squares\").children[y * 10 + x];\n  const computerAttack = humanPlayer.gameboard.registerHit(x,y);\n\n  (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.registerComputerAttackingHuman)(computerAttack, playerSquare);\n\n  if (getWinner()) {\n    (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.displayWinner)();\n  }\n\n}\n\nconst getWinner = () => {\n  if (defendingPlayer.gameboard.areAllShipsSunk() === true){\n    return activePlayer;\n  }\n  return undefined;\n}\n\n\nconst startGame = () => {\n  activePlayer = humanPlayer;\n  defendingPlayer = computerPlayer;\n\n  activePlayer.gameboard = new (_game_classes_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\n  defendingPlayer.gameboard = new (_game_classes_gameboard__WEBPACK_IMPORTED_MODULE_0___default())();\n\n  populateGameboards();\n  (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.initializeGrids)();\n  (0,_ui_controller__WEBPACK_IMPORTED_MODULE_3__.showPlayerShips)();\n\n  const resultsDiv = document.querySelector(\".game-results\");\n  const winnerDiv = document.querySelector(\".winner\");\n\n  if (resultsDiv) {\n    resultsDiv.classList.add(\"game-results--hidden\");\n  }\n  if (winnerDiv) {\n    winnerDiv.textContent = \"\";\n  }\n  const resetButton = document.getElementById(\"reset-button\");\n  if (resetButton && resetButton.classList.contains(\"reset-button--hidden\")) {\n    resetButton.classList.remove(\"reset-button--hidden\");\n  }\n\n}\n\n\n\n\n\n//# sourceURL=webpack://battleship/./controllers/game-controller.js?");

/***/ }),

/***/ "./controllers/ui-controller.js":
/*!**************************************!*\
  !*** ./controllers/ui-controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWinner: () => (/* binding */ displayWinner),\n/* harmony export */   hideResetButton: () => (/* binding */ hideResetButton),\n/* harmony export */   initializeGrids: () => (/* binding */ initializeGrids),\n/* harmony export */   registerComputerAttackingHuman: () => (/* binding */ registerComputerAttackingHuman),\n/* harmony export */   registerHumanAttackingComputer: () => (/* binding */ registerHumanAttackingComputer),\n/* harmony export */   showPlayerShips: () => (/* binding */ showPlayerShips)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _game_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller.js */ \"./controllers/game-controller.js\");\n\n\n\n\nconst grids = Array.from(document.getElementsByClassName(\"board-squares\"));\n\n\nconst initializeGrids = () => {\n  for (const [index, grid] of grids.entries()) {\n    grid.textContent = \"\";\n\n    for (let y = 0; y < 10; y++) {\n      for (let x = 0; x < 10; x++) {\n        const gridSquare = document.createElement(\"div\");\n        gridSquare.classList.add(\"grid-square\");\n        if (index === 0) {\n          gridSquare.classList.add(\"grid-square-human\");\n          gridSquare.dataset.y = y.toString();\n          gridSquare.dataset.x = x.toString();\n          grid.appendChild(gridSquare);\n        } else if (index === 1) {\n          gridSquare.classList.add(\"grid-square-computer\");\n          gridSquare.dataset.y = y.toString();\n          gridSquare.dataset.x = x.toString();\n          grid.appendChild(gridSquare);\n        }\n      }\n    }\n  }\n}\n\nconst showPlayerShips = () => {\n  for (let y = 0; y < _game_controller_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.gameboard.board.length; y++) {\n    for (let x = 0; x < 10; x++) {\n      if (_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.gameboard.board[y][x]) {\n        grids[0].children[y * 10 + x].classList.add(\"grid-square-ship\");\n      }\n    }\n  }\n}\n\n;(0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.startGame)()\n\nconst registerHumanAttackingComputer = (attack, square) =>{\n    if(attack){\n      square.classList.add(\"grid-square--attacked\")\n      return true;\n    } else{\n      square.classList.add(\"grid-square--missed\");\n      (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.togglePlayerStates)();\n    }\n    return false;\n}\n\nconst playerBoard = document.getElementById(\"player-gameboard\")\nconst computerBoard = document.getElementById(\"computer-gameboard\")\n\nconst registerComputerAttackingHuman = (attack, square) =>{\n\n    const isAlreadyAttacked = square.classList.contains(\"grid-square--attacked\")\n      || square.classList.contains(\"grid-square--missed\");\n\n    if(isAlreadyAttacked){\n      (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.computerAttack)();\n    }\n\n    if (attack){\n      square.classList.add(\"grid-square--attacked\")\n      if((0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.getWinner)()){\n        displayWinner();\n      } else{\n        (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.computerAttack)();\n      }\n    } else{\n      square.classList.add(\"grid-square--missed\")\n      ;(0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.togglePlayerStates)()\n    }\n}\n\ncomputerBoard.addEventListener(\"click\", (event) => {\n  const square = event.target;\n  const gridSquare = square.classList.contains(\"grid-square\");\n\n  const isAlreadyAttacked = square.classList.contains(\"grid-square--attacked\")\n      || square.classList.contains(\"grid-square--missed\");\n  const isHumanTurn = (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.getActivePlayer)() === _game_controller_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer;\n  const gameHasWinner = !!(0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.getWinner)();\n\n  if (!gridSquare || isAlreadyAttacked || !isHumanTurn || gameHasWinner) {\n    return;\n  }\n\n  const x = square.dataset.x;\n  const y = square.dataset.y;\n  const hit = (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.playerAttack)(x, y, square)\n\n  if ((0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.getWinner)()) {\n    return;\n  }\n  if (hit){\n    return;\n  }\n\n  (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.computerAttack)();\n\n})\n\nconst winnerDiv = document.querySelector(\".winner\")\nconst resultsDiv = document.querySelector(\".game-results\")\n\nconst displayWinner = () =>{\n    const winner = (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.getWinner)()\n  if(winner ===_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer){\n    winnerDiv.textContent = \"Congratulations! You've won!\"\n  } else if (winner === _game_controller_js__WEBPACK_IMPORTED_MODULE_1__.computerPlayer){\n    winnerDiv.textContent = \"That's too bad. You've lost!\";\n  }\n  resultsDiv.classList.remove(\"game-results--hidden\")\n}\n\nconst resetButton = document.getElementById(\"reset-button\");\nresetButton.addEventListener(\"click\", ()=>{\n  (0,_game_controller_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n})\n\nconst hideResetButton = () =>{\n  resetButton.classList.add(\"reset-button--hidden\")\n}\n\nconst showResetButton = () =>{\n  resetButton.classList.remove(\"reset-button--hidden\")\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./controllers/ui-controller.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./css/style.css?");

/***/ }),

/***/ "./game-classes/gameboard.js":
/*!***********************************!*\
  !*** ./game-classes/gameboard.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ./gameboard */ \"./game-classes/gameboard.js\");\n\nclass Gameboard{\n  constructor(){\n    this.board = Array(10)\n        .fill()\n        .map(() => new Array(10).fill(null))\n    this.missedAttacks= [];\n    this.receivedAttacks= [];\n    this.ships= [];\n  }\n\n  placeShips(ship) {\n    let placed = false;\n\n    while (!placed) {\n\n\n      let {x, y, orientation} = this.randomizeShipLocation() //x and y denote starting position\n      if (orientation !== \"vertical\" && orientation !== \"horizontal\") {\n        throw new Error(\"Error: orientation must be vertical or horizontal.\");\n      }\n      try {\n\n        if (orientation === \"horizontal\") {\n          let endCoordinate = x + ship.length;\n          if (endCoordinate > 10) {\n            continue;\n          }\n          for (let i = x; i < endCoordinate; i++) {\n            if (this.board[y][i] !== null) {\n              throw new Error();\n            }\n          }\n\n          for (let i = x; i < endCoordinate; i++) {\n            this.board[y][i] = ship;\n          }\n\n        } else if (orientation === \"vertical\") {\n          let endCoordinate = y + ship.length;\n          if (endCoordinate > 10) {\n            continue;\n          }\n          for (let i = y; i < endCoordinate; i++) {\n            if (this.board[i][x] !== null) {\n              throw new Error();\n            }\n          }\n          for (let i = y; i < endCoordinate; i++) {\n            this.board[i][x] = ship;\n          }\n        }\n        this.ships.push(ship);\n        placed = true;\n      } catch(err) {\n        continue;\n      }\n    }\n  }\n\n\n\n  randomizeShipLocation(){\n    const x = Math.floor(Math.random() *10);\n    const y = Math.floor(Math.random() *10);\n    const orientation =\n        (Math.random() < 0.5) ? \"vertical\" : \"horizontal\";\n    return {x, y, orientation};\n  }\n\n  registerHit(x,y){\n    const hitSquare = this.board[y][x];\n\n    this.receivedAttacks.push([x, y]);\n\n    if (hitSquare) {\n      hitSquare.hit()\n      return true;\n    }\n    this.missedAttacks.push([x, y])\n    return false;\n  }\n\n  areAllShipsSunk(){\n    return this.ships.\n    every(ship => ship.isSunk());\n  }\n\n}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://battleship/./game-classes/gameboard.js?");

/***/ }),

/***/ "./game-classes/player.js":
/*!********************************!*\
  !*** ./game-classes/player.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./game-classes/gameboard.js\");\n\nclass Player {\n  constructor(type, gameboard) {\n    this.type = type;\n    this.gameboard = new Gameboard();\n  }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./game-classes/player.js?");

/***/ }),

/***/ "./game-classes/ship.js":
/*!******************************!*\
  !*** ./game-classes/ship.js ***!
  \******************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length, hits= 0, sunk=false){\n    this.length = length;\n    this.hits = hits;\n    this.sunk = sunk;\n  }\n\n  hit(){\n    this.hits++;\n  }\n\n  isSunk(){\n    if(this.hits === this.length){\n      this.sunk = true;\n    }\n    return this.sunk;\n  }\n\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship/./game-classes/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --hover-red: #e63946ff;\n  --background-blue: #a8dadcff;\n  --sea-blue: #457b9dff;\n  --ship-deep-blue: #1359b9;\n}\n\nbody{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-family: Arial, Helvetica, sans-serif;\n  min-height: 100vh;\n  text-align: center;\n  background-color: var(--background-blue);\n}\n\nheader{\n  padding: 2rem;\n}\n\n.game-results--hidden {\n  visibility: hidden;\n}\n\n.winner {\n  height: 42px;\n  margin-block: 2rem;\n  font-size: 1.75rem;\n}\n\n#pageTitle {\n  display: flex;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n}\n\n.gameboard-container {\n  display: flex;\n  justify-content: center;\n  gap: 8rem;\n}\n\n#player-gameboard{\n  display: grid;\n  grid-template-columns: repeat(11, 50px);\n  grid-template-rows: repeat(11, 50px);\n  gap: 4px;\n}\n\n#computer-gameboard{\n  display: grid;\n  grid-template-columns: repeat(11, 50px);\n  grid-template-rows: repeat(11, 50px);\n  gap: 4px;\n}\n\n\n.alpha-coordinates {\n  grid-column: 2 / -1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  align-items: center;\n}\n\n.num-coordinates {\n  grid-row: 2 / -1;\n  display: grid;\n  align-items: center;\n}\n\n.board-squares {\n  display: grid;\n  grid-template-columns: repeat(10, min-content);\n  grid-area: 2 / 2 / -1 / -1;\n  gap: 4px;\n}\n\n.grid-square{\n  width: 50px;\n  aspect-ratio: 1;\n  border: 1px solid var(--sea-blue);\n  gap: 2px;\n  border-radius: 0.25rem;\n  box-sizing: border-box;\n}\n\n.grid-square-ship{\n  background-color: var(--ship-deep-blue);\n}\n\n.grid-square-computer{\n  cursor: pointer;\n}\n\n.grid-square-computer:hover{\n  border: 2px solid var(--hover-red);\n}\n\n.grid-square--attacked{\n  border: 1px solid var(--hover-red);\n  background-color: var(--hover-red);\n  cursor: not-allowed;\n}\n\n.grid-square--missed{\n  border: 1px solid var(--sea-blue) !important;\n  background-color: honeydew;\n  cursor: not-allowed;\n}\n\n.gameboard > p{\n  grid-column: 2 / -1;\n  margin-block: 1rem;\n}\n\n.gameboard > button{\n  grid-column: 2 / -1;\n  margin-inline: auto;\n }\n\n.button{\n  background-color: honeydew;\n  border: none;\n  padding: 0.2rem 0.6rem;\n}\n\n.btn:hover {\n  cursor: pointer;\n}\n\n.btn--hidden {\n  visibility: hidden;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./controllers/ui-controller.js");
/******/ 	
/******/ })()
;