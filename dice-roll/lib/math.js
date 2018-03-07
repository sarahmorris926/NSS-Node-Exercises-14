"use strict";

module.exports.randomInt = (low, high) => {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high - low + 1)) + low;
};



// Joe's Version

// 'use strict';

//  const randomInt = (bottom, top) => {
//    if(!top) top = 6;
//    return Math.floor((Math.random() * +top) + bottom)
//  }

//  module.exports = { randomInt }