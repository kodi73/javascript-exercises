const palindromes = function (a) {
    const cleanedString = a.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString===reversedString;
};

// Do not edit below this line
module.exports = palindromes;
