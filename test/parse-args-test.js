const { assert: {isFunction, isObject, isNumber} } = require('chai');
const { num, sides } = require('../dice-roll/lib/parse-args');
const parseArgs = require('../dice-roll/lib/parse-args');

describe('parse-args module', () => {
    describe('parseArgs', () => {
        it('should be a function', () => {
            isFunction(parseArgs);
        })
    })
})