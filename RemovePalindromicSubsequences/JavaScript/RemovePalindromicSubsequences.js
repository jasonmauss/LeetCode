// Solution for: https://leetcode.com/problems/remove-palindromic-subsequences/
var removePalindromeSub = function (s) {
    return s.length === 0 ? 0 : (s === s.split('').reverse().join('')) ? 1 : 2;
};
// some test cases
console.log(removePalindromeSub("ababa")); // 1
console.log(removePalindromeSub("abb")); // 2
console.log(removePalindromeSub("baabb")); // 2
