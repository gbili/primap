# Primap: Private Members WeakMap

Use weakmaps to provide truly private properties to your classes.

This is a very succint implementation and abstraction

## Usage:
Import `primap` in your class definition module and start using it. The important step is to `bind` it to your object reference before setting any properties on `_p()`:
### Example: Guess the Exact Card 
Here is an example with a simple card game where the player wins only if he guesses the secret random card. The player has only 3 chances.
```javascript
// var _p = require('primap');
import _p from 'primap';

class ExactCardGame {
  constructor() {
    _p.bind(this); // important!

    this.deckOfCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const randomNumber = Math.floor(Math.random()*12;
    // we want to privately hold the value of a card
    // so the player cannot cheat (set using property style)
    _p().secretCard = this.deckOfCards[randomNumber];

    // private number of remaining tries, (set using param style)
    _p('remainingTries', 3);
    // could also: _p().remainingTries = 3 (set using property style)

  }

  makeAGuess(guessedCard) {
    if (_p().remainingTries-- <= 0) {
        console.log('Sorry mate, you already ' + ( _p().lastTry === _p().secretCard ? 'won' : 'lost'));
        return;
    }
    if (_p().secretCard === guessedCard) {
      console.log('Hurray!!! You made it! Congrats!!');
    } else {
      console.log(`Nope, you have ${_p().remainingTries} more tries.`);
    }
    // keep track of last try
    _p().lastTry = guessedCard;
  }

  get remainingTries() {
    return _p().remainingTries;
  }
}

// module.exports = ExactCardGame;
export default ExactCardGame;
```
Here is a sample usage:
```javascript
// var ExactCardGame = require('./ExactCardGame');
import ExactCardGame from './ExactCardGame';

const game = new ExactCardGame();

game.makeAGuess(4); // "Nope, you have 2 more tries."
game.makeAGuess(12); // "Nope, you have 1 more tries."
game.makeAGuess(11); // "Hurray!!! You made it! Congrats!!"
```

### Reference
#### Initialize
`import` and `bind`:
"node style"
```javascript
var _p = require('primap');
```
"ES6 style":
```javascript
import _p from 'primap'
```
Binding is mandatory:
```javascript
const someObject = {}
_p().bind(someObject); //_p
```
Above we bound to an object, but the real benefits come from using `_p()` within a class module and binding `this`. So:
```javascript
import _p from 'primap';
class MyClass {
  constructor() {
    _p().bind(this);
  }
}
```
#### Set
"property style":
```javascript
_p().myPrivateProp = 'My private value';
```
"param style":
```javascript
_p('myPrivateProp', 'My private value');
```
#### Get
"property style":
```javascript
_p().myPrivateProp;
```
"param style":
```javascript
_p('myPrivateProp');
```
