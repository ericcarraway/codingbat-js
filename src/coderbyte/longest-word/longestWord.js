/**
 * @name longestWord
 * @function
 *
 * @description
 * find the longest word in a string
 *
 * @param str {string}
 *
 * @returns {string}
 *
 * @example
 */

function longestWord (sen) {
    var senWithoutPunctuation = sen.replace(/[^A-Za-z0-9]/g, ' ');
    var arrOfWords = senWithoutPunctuation.split(' ');
    var compareFunction = function (a, b) {
        return b.length - a.length;
    };

    arrOfWords.sort(compareFunction);
    return arrOfWords[0];
}
