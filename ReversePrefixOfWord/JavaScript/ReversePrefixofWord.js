// Solution for: https://leetcode.com/problems/reverse-prefix-of-word/
var reversePrefix = function (word, ch) {
    var index = word.indexOf(ch);
    if (index === -1)
        return word;
    return word.substring(0, index + 1).split('').reverse().join('') + word.substring(index + 1);
};
// some test cases
console.log(reversePrefix('abcdefd', 'd')); // dcbaefd
console.log(reversePrefix('xyxzxe', 'z')); // zxyxxe
console.log(reversePrefix('abcd', 'z')); // abcd
