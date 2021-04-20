const findOdd = require('./find-odd-integer');

describe('Find odd number', () => {
    test('Should return 5', () => {
        //assing
        const array = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
        //act
        const response = findOdd(array);
        //assert
        expect(response).toBe(5);
    });

    test('Should return 20', () => {
        //assing
        const array = [4, 5, 4, 5, 20];
        //act
        const response = findOdd(array);
        //assert
        expect(response).toBe(20);
    });

    test('Should return -10', () => {
        //assing
        const array = [4, 50, 4, 5, -20, -5, 5, -20, -10, 50, -5];
        //act
        const response = findOdd(array);
        //assert
        expect(response).toBe(-10);
    });
})