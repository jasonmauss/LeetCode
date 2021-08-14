// Solution for: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var _a;
var phoneKeypad = (_a = {},
    _a[2] = ['a', 'b', 'c'],
    _a[3] = ['d', 'e', 'f'],
    _a[4] = ['g', 'h', 'i'],
    _a[5] = ['j', 'k', 'l'],
    _a[6] = ['m', 'n', 'o'],
    _a[7] = ['p', 'q', 'r', 's'],
    _a[8] = ['t', 'u', 'v'],
    _a[9] = ['w', 'x', 'y', 'z'],
    _a);
var letterCombinations = function (digits) {
    if (!digits)
        return [];
    var combinations = new Set();
    var result = [];
    var combiner = function (stringCombination, left) {
        if (combinations.has(stringCombination))
            return;
        combinations.add(stringCombination);
        if (!left) {
            result.push(stringCombination);
            return;
        }
        var newLeft = left.slice(1);
        phoneKeypad[left[0]].forEach(function (char) {
            combiner(stringCombination + char, newLeft);
        });
    };
    combiner('', digits);
    return result;
};
// some test cases
console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('2')); // ["a","b","c"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('46')); // ["gm", "gn", "go", "hm", "hn", "ho", "im", "in", "io"]
console.log(letterCombinations('579')); // ["jpw", ....]
