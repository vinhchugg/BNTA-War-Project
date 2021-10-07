const Cards = require("../src/card.js")

const cards = new Cards();
describe("Testing all cards in deck", () => {
    test("deck initializes with 52 cards", function() {
        // Arrange
        const cards = new Cards();
        // Act
        cards.createDeck();
        // Assert
        const lengthOfCard = cards.deck.length;
        expect(lengthOfCard).toBe(52);
    })
})

test("a card has suit and value property",() => {
   
     // Arrange
     const cards = new Cards();
     // Act
     cards.createDeck();
     const card = cards.deck[0];
     // Assert
     expect(card).toHaveProperty("value");
     expect(card).toHaveProperty("suit");
})

test('shuffles the deck of cards', () => {

    const cards = new Cards();
    // Act
    cards.createDeck();
    // Assert
   const card = cards.deck[0]; 
   cards.shuffle();
   const cardCopy = cards.deck[0];
expect(card).not.toBe(cardCopy);
    
  });

