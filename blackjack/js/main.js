const player1 = 'player1';
const player2 = 'player2';

// call to get a new shuffled deck
let deckPromise = fetch(
  'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
).then((response) => response.json());

async function getCards(deckId, cardCount) {
  let response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardCount}`
  );
  return response.json();
}

deckPromise.then(async (deck) => {
  let data1 = await getCards(deck.deck_id, 2);
  let data2 = await getCards(deck.deck_id, 2);
  printCards(data1.cards, player1);
  printCards(data2.cards, player2);
});

function printCards(cards, playerId) {
  cards.forEach((card) => {
    let cardHtml = `
              <div>
                  <img src="${card.image}">
              </div>
          `;
    document.getElementById(`${playerId}-cards`).innerHTML += cardHtml;
  });
}

async function hitMe(playerId) {
  let deck = await deckPromise;
  let data = await getCards(deck.deck_id, 1);
  printCards(data.cards, playerId);
}
