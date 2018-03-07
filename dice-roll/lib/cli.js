'use strict';

process.title = 'Dice Roll';

const { argv: [,, ...args] } = process
const { randomInt } = require('./math.js')
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({count, sides})
const total = roll(dice)

console.log(dice);
console.log(total);

// Joe's Version: 

// 'use strict';
// const { argv: [,, ...args] } = process,
//       { count, sides } = require('./parse-args')(args),
//       { roll, toDiceNotation } = require('./dice');

// console.log('args', args, 'count', count, 'sides', sides);

// const dice = toDiceNotation({count, sides}),
//      total = roll(dice);

// console.log('total', total);