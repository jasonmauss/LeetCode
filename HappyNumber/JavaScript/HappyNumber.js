// Solution for: https://leetcode.com/problems/happy-number/
var getNextValue = function (n) {
    var totalSum = 0;
    while (n > 0) {
        var d = n % 10;
        n = Math.floor(n / 10);
        totalSum += d * d;
    }
    return totalSum;
};
var isHappy = function (n) {
    while (n !== 1 && n !== 4) {
        n = getNextValue(n);
    }
    return n === 1;
};
// some test cases
console.log(isHappy(19)); //  true
console.log(isHappy(2)); //  false
