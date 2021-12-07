class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    const cardsNewOrder = this.cards
    if(typeof cardsNewOrder !== Array) return undefined
    for(let i = 0; i < cardsNewOrder.length; i++){
      const pickedCard = cardsNewOrder.splice(cardsNewOrder[Math.floor(Math.random * (cardsNewOrder.length - i))])
      cardsNewOrder.push(pickedCard) 
      // cardsNewOrder.push(this.[Math.floor(Math.random * (cardsArr.length - i))].cards)
    }
    console.log(cardsArr)
    console.log(cardsNewOrder)
    return cardsNewOrder
  }

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked ++
      this.pairsGuessed ++
      return true
    } 
    else {
      this.pairsClicked ++
      return false
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed < (this.cards.length / 2)) return false
    else return true
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
