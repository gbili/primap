# Primap: Private Members WeakMap

Use weakmaps to provide truly private properties to your classes.

This is a very succint implementation and abstraction

## Usage:
Import `primap` in your class definition module and start using it. The important step is to `bind` it to your object reference before setting any properties on `_p()`:
```javascript
// var _p = require('primap');
import _p from 'primap';

Class Hello {
  constructor(from, to) {
    _p.bind(this); // important!

    // setting as property access
    _p().from = from;

    // setting as params for dynamic prop names for example
    _p('to', to);
  }

  get greeter() {
    return _p().from;
  }

  sayIt() {
    return `Hello darling! I know your name is ${_p().to}, I'm ${this.greeter}`
  }
}

// module.exports = Hello;
export default Hello;
```
Import your class somewhere else
```javascript
// var Hello = require('./Hello');
import Hello from './Hello';

const hello = new Hello('John', 'Mary');

hello.sayIt(); // "Hello darling! I know your name is Mary, I'm John"

hello.from; // undefined
```
