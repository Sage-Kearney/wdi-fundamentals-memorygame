

const cards = [
  {
    rank: "queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
];
const cardsInPlay = [];


function checkForMatch(){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }};

function flipCard(){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2 ){
    checkForMatch();
  }
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

function createBoard(){
  for(var i=0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', cards[i]);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard()
