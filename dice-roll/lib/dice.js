// "use strict";

// const { randomInt } = require("./math.js");
 
// const toDiceNotation = ({count, sides}) => {
//     return `${count.toString()}d${sides.toString()}`
// }

// const roll = (toDiceNotation) => {
//     let low = +toDiceNotation.slice(0, toDiceNotation.indexOf('d'));
//     let high = +toDiceNotation.slice(toDiceNotation.indexOf('d')+1);
//     return randomInt(low, high);
// }

// module.exports = { toDiceNotation, roll };



// Joe's Version

'use strict';
const { randomInt } = require("./math.js");

module.exports.roll = (diceNotation) => {
    let [rollCount, sides] = diceNotation.split("d");
    let diceTotal = 0;

    for (let i = 0; i < rollCount; i++) {
        diceTotal += randomInt(1, sides);
    }
    return diceTotal;
}

module.exports.toDiceNotation = ({count, sides}) => `${count}d${sides}`;
