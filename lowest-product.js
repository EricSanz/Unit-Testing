function lowestProduct(input) {

    let array = input.split('').map(number => parseInt(number));

    if (input.length < 4) {
        return 'Number is too small';
    }

    const lowest = [];

    for (let iterator = 0; iterator < input.length - 3; iterator++) {
        lowest.push(array[iterator] * array[iterator + 1] * array[iterator + 2] * array[iterator + 3]);
    }

    return lowest.sort((a,b) => a - b)[0];
}

module.exports = lowestProduct;