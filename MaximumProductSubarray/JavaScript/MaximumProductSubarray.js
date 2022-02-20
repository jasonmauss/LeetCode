// Solution for: https://leetcode.com/problems/maximum-product-subarray/
var maxProduct = function (nums) {
    var result = nums[0];
    for (var i = 1, maxNum = result, minNum = result; i < nums.length; i++) {
        if (nums[i] < 0) {
            var tempMin = minNum;
            minNum = maxNum;
            maxNum = tempMin;
        }
        maxNum = Math.max(nums[i], maxNum * nums[i]);
        minNum = Math.min(nums[i], minNum * nums[i]);
        result = Math.max(result, maxNum);
    }
    return result;
};
// some test cases
console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
