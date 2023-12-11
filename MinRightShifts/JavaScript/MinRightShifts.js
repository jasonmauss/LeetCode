// Solution for: https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var minimumRightShifts = function (nums) {
    var sortedNums = __spreadArray([], nums, true).sort(function (a, b) { return a - b; });
    if (JSON.stringify(nums) == JSON.stringify(sortedNums))
        return 0;
    for (var i = 0; i < nums.length; i++) {
        nums.unshift(nums.pop());
        if (JSON.stringify(nums) == JSON.stringify(sortedNums))
            return i + 1;
    }
    return -1;
};
// some test cases
console.log(minimumRightShifts([3, 4, 5, 1, 2])); // 2
console.log(minimumRightShifts([1, 3, 5])); // 0
console.log(minimumRightShifts([2, 1, 4])); // -1
