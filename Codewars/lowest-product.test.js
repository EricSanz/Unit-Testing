const lowestProduct = require('./lowest-product');

describe('Lowest product', () => {
    test('Should return the lowest product of 4 consecutive numbers multiplicated, in this case, 24', () => {
        //arrange
        const input = '123456789';
        //act
        const response = lowestProduct(input);
        //assert
        expect(response).toBe(24);
    });

    test('Should return 2', () => {
        //arrange
        const input = '592371121';
        //act
        const response = lowestProduct(input);
        //assert
        expect(response).toBe(2);
    });

    test('Should return "Number is too small" when ther is less than 4 digits', () => {
        //arrange
        const input = '720';
        //act
        const response = lowestProduct(input);
        //assert
        expect(response).toBe('Number is too small');
    })
})