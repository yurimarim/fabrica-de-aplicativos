// sintaxe CommonJS - export
module.exports = {
    foo: function () { return 'bar'; },
    baz: 123
}




// sintaxe ES6 - export
export function foo() { return 'bar'; }
export const baz = 123;





// sintaxe CommonJS - import
const A = require('./A.js');
const foo = A.foo;
const baz = A.baz;




// sintaxe ES6 - import
import * as A from './A.js';
const foo = A.foo;
const baz = A.baz;