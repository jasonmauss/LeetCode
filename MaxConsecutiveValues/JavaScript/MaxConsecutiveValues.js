// Solution for: https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/
var getMaximumConsecutive = function (coins) {
    coins.sort(function (a, b) { return a - b; });
    var maxConsecutive = 1; // 0 for [] can be assumed so initialize to 1
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        if (coin <= maxConsecutive)
            maxConsecutive += coin;
    }
    return maxConsecutive;
};
// some test cases
console.log(getMaximumConsecutive([1, 3])); // 2
console.log(getMaximumConsecutive([1, 1, 1, 4])); // 8
console.log(getMaximumConsecutive([1, 4, 10, 3, 1])); // 20
