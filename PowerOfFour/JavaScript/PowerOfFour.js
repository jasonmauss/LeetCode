// Solution for: https://leetcode.com/problems/power-of-four/
var isPowerOfFour = function (n) {
    return Number.isInteger(Math.log(n) / Math.log(4));
};
// some test cases
console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
