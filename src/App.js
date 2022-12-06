import React,{useState} from "react";

import cardback from './imgcards/CardBack.png'
import Deck from "./Deck";
import "./App.css";


function App() {


  const deck = new Deck();

  deck.shuffle()

  
  const playerHand = deck.cards.slice(0,9)
  const computerHand = deck.cards.slice(9,18)

  const playerCards = playerHand.map((x)=> {
    return(
    <div>
      {x.imgjsx}
    </div>
    )
  });


  return (
    <div className="App">
      <div className="table">

        <div className="opponent">
          <div className="opponent-hand">
            <img className="cardback"  src={cardback} />
          </div>
        </div>

        <div className="arena">
            <img className="cardback"  src={cardback} />
            <img className="cardback"  src={cardback} />
        </div>

        <div className="player">
          <div className="player-cards">
            {playerCards}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;