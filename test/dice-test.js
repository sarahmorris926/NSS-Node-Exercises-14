const { assert: {isFunction, isNumber, isString, oneOf} } = require('chai');
const { roll, toDiceNotation} = require('../dice-roll/lib/dice');

describe('dice module', () => {
    describe('roll()', () => {
        it('should be a function', () => {
            isFunction(roll);
        })
        it('should return a number', () => {
            isNumber(roll("2d20"));
        });
        it("should accept a string and return a computed number", () => {
            for (let i = 0; i < 10; i++) {
                let diceNotation = `${i}d6`;
                oneOf(roll(diceNotation), Array.from(Array(61).keys()))
            }
        })
    });
    describe('toDiceNotation()', () => {
        it('should return a string', () => {
            isString(toDiceNotation(3, 4));
        })
    })
});


