const Game = function () {
  this.isPlaying = true;
  this.inWar = false;
  this.betCards = [];
  this.betWarCards;
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

Game.prototype.playWar = function () {
  // Two empty arrays to store the 4 cards
  let warCard0 = [];
  let warCard1 = [];

  // Check if still playing previous War
  if (!this.betWarCards) {
    // Push first four items of player's hand to war cards
    warCard0.push(...player0.hand.splice(0, 4));
    warCard1.push(...player1.hand.splice(0, 4));

    // Put cards in war pot
    this.betWarCards = [...warCard0, ...warCard1];

    // Take first card from player's war cards
    let player0Card = warCard0.shift();
    let player1Card = warCard1.shift();

    // If player 1 wins
    if (player0Card.value > player1Card.value) {
      player0.hand.push(...this.betWarCards);
      warCard0 = [];
      warCard1 = [];
      this.betWarCards = undefined;
      this.inWar = false;
      return `Player 1 has ${specialCards(player0Card.value)} of ${
        player0Card.suit
      } which is bigger than ${specialCards(player1Card.value)} of ${
        player1Card.suit
      }. Thus Player 1 has won the War!`;
    }

    // If player 2 wins
    else if (player0Card.value < player1Card.value) {
      player1.hand.push(...this.betWarCards);
      warCard0 = [];
      warCard1 = [];
      this.betWarCards = undefined;
      this.inWar = false;
      return `Player 2 has ${specialCards(player1Card.value)} of ${
        player1Card.suit
      } which is bigger than ${specialCards(player0Card.value)} of ${
        player0Card.suit
      }. Thus Player 2 has won the War!`;
    }

    // Cards are similar, check next card
    else {
      console.log("The war continues");
      return Game.prototype.playRound();
    }
  }
  if (warCard0.length > 0 || warCard1.length > 0) {
    if (player0Card.value > player1Card.value) {
      player0.hand.push(...this.betWarCards);
      warCard0 = [];
      warCard1 = [];
      this.betWarCards = undefined;
      this.inWar = false;
      console.log(this);
      return `Player 1 has ${specialCards(player0Card.value)} of ${
        player0Card.suit
      } which is bigger than ${specialCards(player1Card.value)} of ${
        player1Card.suit
      }. Thus Player 1 has won the War!`;
    }

    // If player 2 wins
    else if (player0Card.value < player1Card.value) {
      player1.hand.push(...this.betWarCards);
      warCard0 = [];
      warCard1 = [];
      this.betWarCards = undefined;
      this.inWar = false;
      return `Player 2 has ${specialCards(player1Card.value)} of ${
        player1Card.suit
      } which is bigger than ${specialCards(player0Card.value)} of ${
        player0Card.suit
      }. Thus Player 2 has won the War!`;
    }

    // Cards are similar, check next card
    else {
      console.log("The war continues");
      return Game.prototype.playRound();
    }
  }
};

Game.prototype.playRound = function () {
  // Check if either player has 52 cards
  if (player0.hand.length === 52) {
    this.isPlaying = false;
    return "Player 1 has collected all 52 cards and has won the game!";
  }
  if (player1.hand.length === 52) {
    this.isPlaying = false;
    return "Player 2 has collected all 52 cards and has won the game!";
  }

  // Check if this.isPlaying is true
  if (this.isPlaying) {
    // If not in war
    if (!this.inWar) {
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
      else if (player0Card.value < player1Card.value) {
        player1.hand.push(...this.betCards);
        this.betCards = [];
        return `Player 2 has ${specialCards(player1Card.value)} of ${
          player1Card.suit
        } which is bigger than ${specialCards(player0Card.value)} of ${
          player0Card.suit
        }`;
      }

      // If cards have the same value
      else {
        this.inWar = true;
        return "Let the War begin!";
      }
    }
    return Game.prototype.playWar();
  }
};
