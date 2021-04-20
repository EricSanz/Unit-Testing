function isHappy(n, pow) {
    let array = [n];
    let sum = 0;
    let number = n.toString();
    do {
        for (let iterator = 0; iterator < number.length; iterator++) {
            sum += Math.pow(+number[iterator], pow);
        }
        number = sum;
        array.push(number);
        number = number.toString();
        sum = 0;
    } while (+number !== n && +number !== 1 && array.length < 100);

    if (array[array.length - 1] === 1) {
        return [1];
    }
    return array;
};

module.exports = isHappy;