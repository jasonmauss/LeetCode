// Solution for: https://leetcode.com/problems/valid-palindrome-ii/
var validPalindrome = function (s) {
    for (var i = 0; i < s.length / 2; i++) {
        var j = s.length - i - 1;
        if (s[i] !== s[j]) {
            return isPalindrome(removeCharAt(s, i)) || isPalindrome(removeCharAt(s, j));
        }
    }
    return true;
};
// remove a character at a specified index/position
var removeCharAt = function (s, index) { return s.substr(0, index) + s.substr(index + 1); };
// split the string into an array, reverse the array, then re-join it.
var isPalindrome = function (s) { return s === s.split('').reverse().join(''); };
// some test cases
console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("abcba")); // true
console.log(validPalindrome("abcdef")); // false
