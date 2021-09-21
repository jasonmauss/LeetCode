// Solution for: https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
var generateTheString = function (n) {
    // simple one-liner using .repeat()
    return n % 2 === 0 ? 'a'.repeat(n - 1) + "b" : 'a'.repeat(n);
};
// some test cases
console.log(generateTheString(4)); // aaab
console.log(generateTheString(2)); // ab
console.log(generateTheString(7)); // aaaaaaa
