const highAndLow = require('./high-and-low');

describe('find High and Low number', () => {
    test('Should return the highest and lowest number of the array', () => {
        //arrange
        const numbers = ('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
        //act
        const response = highAndLow(numbers);
        //asser
        expect(response).toBe('542 -214');
    });

    test('Should return the same number',() => {
        //arrange
        const numbers = ('25 25');
        //act
        const response = highAndLow(numbers);
        //assert
        expect(response).toBe('25 25');
    })
})