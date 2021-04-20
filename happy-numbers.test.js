const isHappy = require('./happy-numbers');

describe('isHappy function', () => {
    test('Should return [42, 20, 4, 16, 37, 58, 89, 145, 42]', () => {
        //arrange
        const n = 42;
        const pow = 2;
        //act
        const response = isHappy(n, pow);
        //assert
        expect(response).toStrictEqual([42, 20, 4, 16, 37, 58, 89, 145, 42]);
    });

    test('Should return [1]', () => {
        //arrange
        const n = 7;
        const pow = 2;
        //act
        const response = isHappy(n, pow);
        //assert
        expect(response).toStrictEqual([1]);
    });
})