var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Solution for: https://leetcode.com/problems/maximum-number-of-words-you-can-type/
var canBeTypedWords = function (text, brokenLetters) {
    return text.split(' ').filter(function (word) { return !wordHasBrokenLetter(word, brokenLetters); }).length;
};
// since destructuring works on strings, we can use it with .some() and
// .includes() to determine if it contains a broken letter or not, basically
// just comparing the two arrays to each other
var wordHasBrokenLetter = function (word, brokenLetter) {
    return __spreadArray([], word).some(function (char) { return brokenLetter.includes(char); });
};
// some test cases
console.log(canBeTypedWords("a b c d e", "abcde")); // 0
console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
console.log(canBeTypedWords("hello darkness my old friend", "ks")); // 4
