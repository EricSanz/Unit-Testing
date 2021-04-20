const pigIt = require('./pig-latin');

describe('pigIt function', () => {
    test('Should return every word without the first letter and add it at the end plus ay', () => {
        //arrange
        const text = 'Pig latin is cool';
        //act
        const response = pigIt(text);
        //assert
        expect(response).toBe('igPay atinlay siay oolcay');
    });

    test('Should return ? at the end of the phrase', () => {
        //arrange
        const text = 'Pig latin is cool ?';
        //act
        const response = pigIt(text);
        //assert
        expect(response).toBe('igPay atinlay siay oolcay ?');
    })
})