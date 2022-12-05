//import logo from './logo.svg';

import Deck from "./Deck";
import "./App.css";

function App() {

  const deck = new Deck();

  deck.shuffle()
  console.log(deck)

  //const playerDeck = new Deck

  return (
    <div className="App">
      
      <div className="computer-deck deck">26</div>
      <div className="computer-card-slot card-slot">
        <div className="card">
        🥨
        </div>
      </div>
      <div className="text">text is here</div>
      <div className="player-deck deck">26</div>
      <div className="player-card-slot card-slot">CCS</div>      
      
    </div>
  );
}

export default App;
