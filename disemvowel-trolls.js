function disemvowel(str) {

    let stringSplitted = str.split('');

    for (let iterator = 0; iterator < stringSplitted.length; iterator++) {
        if (
            stringSplitted[iterator].toLowerCase() === 'a' ||
            stringSplitted[iterator].toLowerCase() === 'e' ||
            stringSplitted[iterator].toLowerCase() === 'i' ||
            stringSplitted[iterator].toLowerCase() === 'o' ||
            stringSplitted[iterator].toLowerCase() === 'u'
            ) {
                stringSplitted[iterator] = '';
            }
    }

    str = stringSplitted.join('');
    return str;
};

module.exports = disemvowel;