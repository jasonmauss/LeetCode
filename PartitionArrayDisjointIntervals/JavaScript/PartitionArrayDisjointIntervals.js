// Solution for: https://leetcode.com/problems/partition-array-into-disjoint-intervals/
var partitionDisjoint = function (nums) {
    var lastVal = 0;
    var leftMaxValue = nums[0];
    var rightMaxValue = null;
    for (var i = 1; i < nums.length; i++) {
        var currentValue = nums[i];
        if (currentValue >= leftMaxValue) {
            rightMaxValue = Math.max(rightMaxValue || -Number.MAX_VALUE, currentValue);
        }
        else {
            lastVal = i;
            leftMaxValue = Math.max(leftMaxValue, rightMaxValue || -Number.MAX_VALUE);
        }
    }
    return lastVal + 1;
};
// some test cases
console.log(partitionDisjoint([5, 0, 3, 8, 6])); // 3
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12])); // 4
