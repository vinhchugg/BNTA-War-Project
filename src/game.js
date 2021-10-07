const Game = function () {
  this.isPlaying = true;
  this.inWar = false;
  this.betCards = [];
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

Game.prototype.playRound = function () {
  // If not in war
  if (this.inWar === false) {
    // Both players draw cards
    let player0Card = player0.hand.shift();
    let player1Card = player1.hand.shift();

    // Cards get put into a pot to be given to the winner
    this.betCards.push(player0Card, player1Card);

    // If player 1 wins
    if (player0Card.value > player1Card.value) {
      player0.hand.push(...this.betCards);
      this.betCards = [];
      return `Player 1 has ${specialCards(player0Card.value)} of ${
        player0Card.suit
      } which is bigger than ${specialCards(player1Card.value)} of ${
        player1Card.suit
      }`;
    }

    // If player 2 wins
    if (player0Card.value < player1Card.value) {
      player1.hand.push(...this.betCards);
      this.betCards = [];
      return `Player 2 has ${specialCards(player1Card.value)} of ${
        player1Card.suit
      } which is bigger than ${specialCards(player0Card.value)} of ${
        player0Card.suit
      }`;
    }
  }
};

const checkWinner = (player) => {
  if (player.hand.length === 52) {
    return true;
  }
  return false;
}