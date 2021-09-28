// Solution for: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
var isSumEqual = function (firstWord, secondWord, targetWord) {
    // if we use charCodeAt() and deduct 97 from it ("a" = 97)
    // then we can get relative values for each letter and then
    // just add them up
    var firstWordValue = getWordValue(firstWord);
    var secondWordValue = getWordValue(secondWord);
    return firstWordValue + secondWordValue === getWordValue(targetWord);
};
var getWordValue = function (word) {
    var numericString = '';
    for (var i = 0; i < word.length; i++) {
        numericString += (word.charCodeAt(i) - 97).toString();
    }
    return Number(numericString);
};
// some test cases
console.log(isSumEqual('acb', 'cba', 'cdb')); // true
console.log(isSumEqual('aaa', 'a', 'aab')); // false
console.log(isSumEqual('aaa', 'a', 'aaaa')); // true
