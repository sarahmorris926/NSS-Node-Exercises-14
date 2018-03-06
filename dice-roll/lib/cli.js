'use strict';

process.title = 'Dice Roll'

const { randomInt } = require('./math.js')
const { argv: [,, ...args] } = process
const parseArgs = require('./parse-args.js')
const { roll, toDiceNotation } = require('./dice')

let args = parseArgs(argv);

const dice = toDiceNotation({count, sides})
const total = roll(dice)

console.log(total)