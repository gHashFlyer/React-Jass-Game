const SUITS = ["🥨","🍺","🍀","❤️️"]
const NAMES = ["A","K","O","U","10","9","8","7","6"]

const ATTR = [
    {name:"A", rank:1, trank:3, val:11, tval:11},
    {name:"K", rank:2, trank:5, val:4, tval:4},
    {name:"O", rank:3, trank:6, val:3, tval:3},
    {name:"U", rank:4, trank:1, val:2, tval:20},
    {name:"10", rank:5, trank:4, val:10, tval:10},
    {name:"9", rank:6, trank:2, val:0, tval:14},
    {name:"8", rank:7, trank:7, val:0, tval:0},
    {name:"7", rank:8, trank:8, val:0, tval:0},
    {name:"6", rank:9, trank:9, val:0, tval:0}
]

export default class Deck {
    constructor(cards=freshDeck()){
        this.cards = cards
        this.attrs = ATTR
    }

    get numCards(){
        return this.cards.length
    }

    // Fisher–Yates Shuffle
    // https://bost.ocks.org/mike/shuffle/
    shuffle(){
        let array = this.cards;
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
    }


}

class Card{
    constructor(suit,name){
        this.name = name
        this.suit = suit
    }
}



function freshDeck(){
    return SUITS.flatMap(suit =>{
        return NAMES.map(name=>{
            return new Card(suit, name);
        })
    })
}
