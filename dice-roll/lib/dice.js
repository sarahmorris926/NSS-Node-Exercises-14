"use strict";

const { randomInt } = require("./math.js");
 
const toDiceNotation = ({count, sides}) => {
    return `${count.toString()}d${sides.toString()}`
}

const roll = (toDiceNotation) => {
    let low = +toDiceNotation.slice(0, toDiceNotation.indexOf('d'));
    let high = +toDiceNotation.slice(toDiceNotation.indexOf('d')+1);
    return randomInt(low, high);
}

module.exports = { toDiceNotation, roll };
