// Solution for: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function (nums, target) {
    var firstPosition = -1;
    var lastPosition = -1;
    if (nums.length > 0) {
        for (var i = 0; i < nums.length; ++i) {
            if (nums[i] === target) {
                if (firstPosition === -1) {
                    firstPosition = i;
                    lastPosition = i;
                }
                else {
                    lastPosition = i;
                }
            }
        }
        if (lastPosition === -1)
            firstPosition = -1;
    }
    return [firstPosition, lastPosition];
};
// some test cases
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
