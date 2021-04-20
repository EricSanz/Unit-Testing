function pigIt(text) {
    return text.split(' ').map((word) => {
        if(word === '!' || word === '?') {
            return word;
        } else {
            return word.substr(1) + word[0] + 'ay';
        }
    }).join(' ');
};

module.exports = pigIt;