#!/usr/bin/env node
'use strict';

const randomInt = (lowerNum, upperNum) => {
    Math.floor((Math.random() * (top - bottom + 1)) + bottom);
}

module.exports = {randomInt}