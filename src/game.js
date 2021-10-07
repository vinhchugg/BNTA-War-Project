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

function specialCards(value) {
  if (value === 14) return "Ace";
  if (value === 13) return "King";
  if (value === 12) return "Queen";
  if (value === 11) return "Jack";
  return value;
}
