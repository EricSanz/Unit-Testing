const deepClone = require('./deep-clone');

describe('Deep clone function', () => {
    test('Should clone null', () => {
        //arrange
        let original = null;
        //act
        let copy = deepClone(original);
        //assert
        expect(copy).toBe(original);
    });

    test('Should clone undefined', () => {
        //arrange
        let original = undefined;
        //act
        let copy = deepClone(original);
        //assert
        expect(copy).toBe(original);
    });

    test('Should clone an empty object', () => {
        //arrange
        let original = {};
        //act
        let copy = deepClone(original);
        //assert
        expect(copy).toMatchObject(original);
    });

    test('Should clone one level object', () => {
        //arrange
        let original = { name: 'Eric', Age: 33 };
        //act
        let copy = deepClone(original);
        //assert
        expect(copy).toEqual(original);
    });

    test('Should clone two levels object', () => {
        //arrange
        let original = { name: 'Eric', Age: 33, skills: { react: 100, angular: 60 }};
        //act
        let copy = deepClone(original);
        //assert
        expect(copy.skills !== original.skills && copy.skills.react === original.skills.react).toBe(true);
    });

    test('Should clone three levels object', () => {
        //arrange
        let original = { name: 'Eric', Age: 33, skills: { react: { min: 0, max: 100, current: 100 }, angular: { min: 0, max: 100, current: 60 } }};
        //act
        let copy = deepClone(original);
        //assert
        expect(copy.skills !== original.skills && copy.skills.react !== original.skills.react && copy.skills.react.max === original.skills.react.max ).toBe(true);
    });
})