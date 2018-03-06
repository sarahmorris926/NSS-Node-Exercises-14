#!/usr/bin/env node
'use strict';

const randomInt = (lowerNum, upperNum) => {
    Math.floor((Math.random() * (upperNum - lowerNum + 1)) + lowerNum);
}


module.exports = {randomInt}