'use strict';

process.title = 'Dice Roll'

const { randomInt } = require('./math.js')
const { argv: [,, ...args] } = process
const { count, sides } = require('./parse-args')(args)
const { roll, toDiceNotation } = require('./dice')

const dice = toDiceNotation({count, sides})
const total = roll(dice)

console.log(dice);
console.log(total);