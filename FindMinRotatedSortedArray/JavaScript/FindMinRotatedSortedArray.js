// Solution for: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
var findMin = function (nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = Math.floor(Number((left + right) / 2));
        if (nums[mid] > nums[right])
            left = mid + 1;
        else
            right = mid;
    }
    return nums[left];
};
// some test cases
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
