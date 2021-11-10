// Solution for: https://leetcode.com/problems/determine-if-string-halves-are-alike/
var halvesAreAlike = function (s) {
    var _a, _b;
    return ((_a = s.substring(0, s.length / 2).match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.length) === ((_b = s.substring(s.length / 2).match(/[aeiou]/gi)) === null || _b === void 0 ? void 0 : _b.length);
};
// some test cases
console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false
console.log(halvesAreAlike("MerryChristmas")); // false
console.log(halvesAreAlike("AbCdEfGh")); // true
console.log(halvesAreAlike("bCdFgHjKl")); // true
