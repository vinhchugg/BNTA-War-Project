const Game = function () {
  this.isPlaying = true;
};

Game.prototype.dealCards = function () {
  for (let i = 0; i < cards.deck.length; i++) {
    if (i % 2 === 0) {
      player1.hand.push(cards.deck[i]);
    } else {
      player0.hand.push(cards.deck[i]);
    }
  }
};
