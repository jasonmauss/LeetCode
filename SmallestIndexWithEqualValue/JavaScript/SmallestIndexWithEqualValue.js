// Solution for: https://leetcode.com/problems/smallest-index-with-equal-value/
var smallestEqual = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }
    return -1;
};
// some test cases
console.log(smallestEqual([0, 1, 2])); // 0
console.log(smallestEqual([4, 3, 2, 1])); // 2
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // -1
console.log(smallestEqual([2, 1, 3, 5, 2])); // 1
