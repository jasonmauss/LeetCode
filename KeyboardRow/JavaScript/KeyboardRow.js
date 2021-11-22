// Solution for: https://leetcode.com/problems/keyboard-row/
var findWords = function (words) {
    var result = [];
    var charRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
    words.forEach(function (word) {
        var letters = word.toUpperCase().split('');
        charRows.forEach(function (chars) {
            var everyTest = letters.every(function (letter) { return chars.includes(letter); });
            if (everyTest)
                result.push(word);
        });
    });
    return result;
};
// some test cases
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["adsdf", "sfd"])); // ["adsdf","sfd"]
