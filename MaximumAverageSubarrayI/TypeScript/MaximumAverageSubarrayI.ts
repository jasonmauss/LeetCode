// Solution for: https://leetcode.com/problems/maximum-average-subarray-i/
function findMaxAverage(nums: number[], k: number): number {

    let totalSum:number = 0;
    let maxSum:number = -Infinity;

    for(let i:number = 0; i < nums.length; i++) {
        totalSum += nums[i];

        if(i >= k - 1) {
            maxSum = Math.max(maxSum, totalSum / k);
            totalSum -= nums[i - k + 1];
        }
    }

    return maxSum;
};

// some test cases
console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5.00000
