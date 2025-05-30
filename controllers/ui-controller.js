import "../css/style.css"

let body = document.getElementById("body");

let title = document.createElement('h1');
title.innerText= "Battleship"
title.setAttribute('id', 'pageTitle')


let gameContainer = document.createElement("div");
gameContainer.setAttribute("id", "gameContainer");
let playerGameboard = document.createElement("div");
let computerGameboard = document.createElement("div");

body.appendChild(title);
body.appendChild(gameContainer);
gameContainer.appendChild(playerGameboard);
gameContainer.appendChild(computerGameboard);