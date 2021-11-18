// Solution for: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
var dominantIndex = function (nums) {
    if (nums.length === 1)
        return 0;
    var largestNumber = Math.max.apply(Math, nums);
    var result = nums.indexOf(largestNumber);
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if ((num !== largestNumber) && ((num * 2) > largestNumber)) {
            return -1;
        }
    }
    return result;
};
// some test cases
console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
console.log(dominantIndex([1])); // 0
console.log(dominantIndex([3, 6, 12, 24])); // 3
console.log(dominantIndex([3, 6, 12, 23])); // -1
