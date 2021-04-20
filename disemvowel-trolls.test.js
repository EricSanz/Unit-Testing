const disemvowel = require('./disemvowel-trolls');

describe('Disemvowel trolls', () => {

    test('Should erase vowels', () => {
        //arrange
        const text = 'This website is for losers LOL!';
        //act
        const response = disemvowel(text);
        //assert
        expect(response).toBe('Ths wbst s fr lsrs LL!');
    });

    test('Should erase vowels', () => {
        //arrange
        const text = 'Vowels, disappear!';
        //act
        const response = disemvowel(text);
        //assert
        expect(response).toBe('Vwls, dsppr!');
    })
})