import React, {useState, useEffect, useMemo} from "react";

import Deck from "./Deck";
import "./App.css";

import cardbox from './imgcards/spielkarten.jpg'
import carddeck from './imgcards/CardBack.png'

function App() {

  const [playJass, setPlayJass] = useState(false) //true if game is in progress
  const [cardDeck, setCardDeck] = useState(false) // holds deck class object
  const [playerFirst, setPlayerFirst] = useState(false) // true if player goes first
  const [playerCards, setPlayerCards] = useState(false); // player cards only
  const [oppoCards, setOppoCards] = useState(false);
  const [trumpCard, setTrumpCard] = useState(false)
  const [trump, setTrump] = useState(false)
  const [cardPlayer, setCardPlayer] = useState(false); // player's card this round
  const [cardOppo, setCardOppo] = useState(false); // opponent's card this round
  
  // When playJass changes to True, get some new cards and shuffle them
  useEffect(() => {
    if(playJass){
      console.log("New deck + shuffle")
      const deck = new Deck();
      deck.shuffle()

      setCardDeck(deck)
      setPlayerCards(deck.cards.slice(0,9))
      setOppoCards(deck.cards.slice(9,18))

      const turnupCard = deck.cards[35]
      console.log(turnupCard)
      setTrumpCard(turnupCard)
      setTrump(turnupCard.suit)
      
    }
    return () => {}
  }, [playJass])


  // kicks off the useEffect, and decides who goes first
  const handlePlayJass = () =>{
    setPlayJass(true)
    if(Math.random() > 0.5){
      setPlayerFirst(true)
      console.log("Player goes first")
    }else{
      setPlayerFirst(false)
      console.log("Opplyr goes first")
    }
  }

  const playCard = (e) =>{
    const cardSuit = e.target.attributes[1].nodeValue
    const cardName = e.target.attributes[2].nodeValue
    console.log(cardSuit + " " + cardName)

    const idx = playerCards.findIndex((x) => x.cardID === e.target.alt)
    let newPlayerCards = [...playerCards];
    newPlayerCards[idx].played = true
    setPlayerCards(newPlayerCards)
  }

  // If game has started and there is a deck of cards, then
  // show the cards remaining in the player's hand.
  let playerHand // cards not played by player
  let turnupCard // the turn up card to display
  if(playJass && cardDeck && playerCards && oppoCards){

    turnupCard = trumpCard.imgjsx

    playerHand = playerCards.map((card)=>{
      if(!card.played){
        return(
          <div onPointerDown={playCard} key={Math.random()}>
            {card.imgjsx}
          </div>
          )
      }else{
        return(
          <div key={Math.random()}>
            {/* {card.imgjsx} */}
          </div>
        )
      }
    })
  }


  const opponentPlays = (e) =>{
    if(e === 1){ // play a reply
      console.log(".....opponent is playing a reply")
    }else{ // play whatever
      console.log(".....opponent is playing whatever it wants")
      
    }

  }

  // Determine if opponent can play a card
  if(oppoCards && !cardOppo){
    let numPlayerCards = playerCards.filter((x) => x.played === false).length
    let numOppoCards = oppoCards.filter((x) => x.played === false).length
    console.log(playerFirst + ": " + numPlayerCards + " " + numOppoCards)
    if(playerFirst){
      if(numPlayerCards < numOppoCards){
        console.log("Oppo plays reply")
        opponentPlays(1);
      }else{
        console.log("Waiting on player")
      }
    }else{
      if(numOppoCards === numPlayerCards){
        console.log("Oppo plays a card")
        opponentPlays(2);
      }else{
        console.log("Waiting on player response")
      }
    }

  }

  // if(!playerFirst && )
   


  return (
    <div className="App">
      <div className="table">

        <div className="opponent">
          <div className="opponent-hand">
            {!playJass && <img alt='tableDeck' className="cardback stack"  src={cardbox} />}
            {playJass && <img alt='tableDeck' className="cardback stack"  src={carddeck} />}
            {playJass && <div className="turnup-card">{turnupCard}</div>}
              
          </div>
        </div>

        <div className="arena">
            {/* <img className="cardback"  src={cardback} /> */}
            {/* <img className="cardback"  src={cardback} /> */}
            {!playJass && <div onPointerDown={handlePlayJass} className="jasshero">Play JASS</div>}
        </div>

        <div className="player">
          <div className="player-cards">
            {playerHand}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;