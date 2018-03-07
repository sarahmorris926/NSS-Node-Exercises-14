
const {assert} = require('chai');

describe("Array", () => {
    describe('indexOf()', () => {
        it('should be equal to -1 when value is not present', () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
    describe('length()', () => {
        it('should not be 0', () => {
            assert.notEqual(0, [1,2,3].length);
        });
    });
    describe('length()', () => {
        it('should be equal to 4 when values are present', () => {
            assert.equal(4, [1,2,3,4].length);
        })
    })
});