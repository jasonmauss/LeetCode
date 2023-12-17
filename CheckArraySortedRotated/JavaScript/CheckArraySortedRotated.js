// Solution for: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
var check = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
    }
    return (count <= 1);
};
// some test cases
console.log(check([3, 4, 5, 1, 2])); // true
console.log(check([2, 1, 3, 4])); // false
console.log(check([1, 2, 3])); // true
