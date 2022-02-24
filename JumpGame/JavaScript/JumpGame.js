// Solution for: https://leetcode.com/problems/jump-game/
var canJump = function (nums) {
    if (nums.length === 1) {
        return true;
    }
    if (nums[0] === 0) {
        return false;
    }
    var max = nums[0];
    for (var i = 1; i < nums.length - 1; i++) {
        max--;
        if (nums[i] === 0 && max <= 0) {
            return false;
        }
        max = Math.max(max, nums[i]);
    }
    return true;
};
// some test cases
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
