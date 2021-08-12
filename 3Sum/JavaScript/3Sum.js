// Solution for:  https://leetcode.com/problems/3sum/
var threeSum = function (nums) {
    if (nums.length < 3)
        return [];
    // sort numbers from smallest to largest
    nums = nums.sort(function (a, b) { return a - b; });
    var triplets = [];
    for (var i = 0; i < nums.length - 2; i++) {
        // Remove any duplicates from anchor position before setting up pointers.
        while (nums[i] === nums[i - 1])
            i++;
        var left = i + 1;
        var right = nums.length - 1;
        while (left < right) {
            var _a = [
                nums[i],
                nums[left],
                nums[right],
            ], anchorVal = _a[0], leftValue = _a[1], rightValue = _a[2];
            var sum = anchorVal + leftValue + rightValue;
            if (sum === 0) {
                triplets.push([anchorVal, leftValue, rightValue]);
                // Remove dupes after finding the sum of zero.
                while (nums[left] === nums[left + 1])
                    left++;
                left++;
            }
            if (sum > 0)
                right--;
            if (sum < 0)
                left++;
        }
    }
    return triplets;
};
// some test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [-1,-1,2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
