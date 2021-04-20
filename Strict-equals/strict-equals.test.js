const strictEquals = require('./strict-equals');

describe('strict equals function', () => {
    test('Should compare NaN & NaN and return false', () => {
        //arrange
        const a = NaN;
        const b = NaN;
        //act
        const response = strictEquals(a, b);
        //assert
        expect(response).toBe(false);
    });

    test('Should compare 1 & 1 and return true', () => {
         //arrange
         const a = 1;
         const b = 1;
         //act
         const response = strictEquals(a, b);
         //assert
         expect(response).toBe(true);
    });

    test('Should compare 1 & "1" and return false', () => {
        //arrange
        const a = 1;
        const b = '1';
        //act
        const response = strictEquals(a, b);
        //assert
        expect(response).toBe(false);
   });

   test('Should compare 0 & -0 and return true', () => {
        //arrange
        const a = 0;
        const b = -0;
        //act
        const response = strictEquals(a, b);
        //assert
        expect(response).toBe(true);
    });

    test('Should compare -0 & 0 and return true', () => {
        //arrange
        const a = -0;
        const b = 0;
        //act
        const response = strictEquals(a, b);
        //assert
        expect(response).toBe(true);
   });

   test('Should compare true & false and return false', () => {
         //arrange
         const a = true;
         const b = false;
         //act
         const response = strictEquals(a, b);
         //assert
         expect(response).toBe(false);
    });

    test('Should compare false & false and return true', () => {
        //arrange
        const a = false;
        const b = false;
        //act
        const response = strictEquals(a, b);
        //assert
        expect(response).toBe(true);
   });

   test('Should compare "water & "oil" and return false', () => {
         //arrange
         const a = 'water';
         const b = 'oil';
         //act
         const response = strictEquals(a, b);
         //assert
         expect(response).toBe(false);
    });
});