// Solution for: https://leetcode.com/problems/maximum-average-subarray-i/
function findMaxAverage(nums, k) {
    var totalSum = 0;
    var maxSum = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, totalSum / k);
            totalSum -= nums[i - k + 1];
        }
    }
    return maxSum;
}
;
// some test cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.75000
