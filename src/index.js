const Cards = require("../src/card");
const Player = require("../src/player");
const Game = require("../src/game");

const player0 = new Player("Bob");
const player1 = new Player("Jim");

const cards = new Cards();
cards.createDeck();
cards.shuffle();
const game = new Game();
game.dealCards();
