const Cards = function () {
  this.suits = ["Diamond", "Colver", "Heart", "Spade"];
  this.values = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  this.deck = [];
};

//Create a method to create deck of cards
Cards.prototype.createDeck = function () {
  for (let suit = 0; suit < this.suits.length; suit++) {
    for (let value = 0; value < this.values.length; value++) {
      const card = {
        suit: this.suits[suit],
        value: this.values[value],
      };
      this.deck.push(card);
    }
  }
  return this.deck;
};

//Create a method to shuffle the deck of cards
Cards.prototype.shuffle = function () {
  let m = this.deck.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);

    [this.deck[m], this.deck[i]] = [this.deck[i], this.deck[m]];
  }
  return this.deck;
};

const cards = new Cards();
module.exports = Cards;
