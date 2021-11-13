"use strict";
exports.__esModule = true;
// Solution for: https://leetcode.com/problems/majority-element/
var majorityElement = function (nums) {
    var majorityNumber = 0;
    var countMap = new Map();
    countMap.set(0, 0);
    for (var i = 0; i < nums.length; i++) {
        if (!countMap.has(nums[i])) {
            countMap.set(nums[i], 1);
        }
        else {
            countMap.set(nums[i], countMap.get(nums[i]) + 1);
        }
        if (countMap.get(nums[i]) > countMap.get(majorityNumber)) {
            majorityNumber = nums[i];
        }
    }
    return majorityNumber;
};
// some test cases
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([6, 5, 5])); // 5
console.log(majorityElement([6, 6, 6, 7, 7])); // 6
