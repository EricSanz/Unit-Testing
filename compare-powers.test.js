const comparePowers = require('./compare-powers');

describe('Compare powers function', () => {
    test('Should return 1', () => {
        //arrange
        const n1 = [2, 10];
        const n2 = [2, 15];
        //act
        const response = comparePowers(n1, n2);
        //assert
        expect(response).toBe(1);
    });

    test('Should return 0', () => {
        //arrange
        const n1 = [3, 20];
        const n2 = [3, 20];
        //act
        const response = comparePowers(n1, n2);
        //assert
        expect(response).toBe(0);
    });

    test('Should return -1', () => {
        //arrange
        const n1 = [7, 7];
        const n2 = [5, 8];
        //act
        const response = comparePowers(n1, n2);
        //assert
        expect(response).toBe(-1);
    })
})