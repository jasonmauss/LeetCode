// Solution for: https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
var areNumbersAscending = function (s) {
    var numbersOnly = s.split(' ').filter(function (s) { return Number.isInteger(parseInt(s)); }).map(Number);
    for (var i = 1; i < numbersOnly.length; i++) {
        if (numbersOnly[i] <= numbersOnly[i - 1])
            return false;
    }
    return true;
};
// some test cases
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true
console.log(areNumbersAscending("hello world 5 x 5")); // false
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // false
console.log(areNumbersAscending("4 5 11 26")); // true
