// Solution for: https://leetcode.com/problems/array-partition/
var arrayPairSum = function (nums) {
    var sortedNums = nums.sort(function (a, b) { return a - b; });
    var res = 0;
    for (var i = 0; i < sortedNums.length; i += 2) {
        res += sortedNums[i];
    }
    return res;
};
// some test cases
console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
