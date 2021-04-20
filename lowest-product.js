function lowestProduct(input) {

    let array = input.split('').map(number => parseInt(number));

    if (input.length < 4) {
        return 'Number is too small';
    }

    const lowest = [];

    for (let i = 0; i < input.length - 3; i++) {
        lowest.push(array[i] * array[i + 1] * array[i + 2] * array[i + 3]);
    }

    return lowest.sort((a,b) => a - b)[0];
}

module.exports = lowestProduct;