

const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);


if (cardsInPlay.length === 2 ){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else{
    alert("Sorry, try again.");
  }
} else{
  console.log("we need another card");
}
