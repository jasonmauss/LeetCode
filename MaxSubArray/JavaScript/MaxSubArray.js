// Solution for: https://leetcode.com/problems/maximum-subarray/
const maxSubArray = (nums) => {
    let currentWindow = 0;
    let bigWindow = -Infinity;
    for (const num of nums) {
        currentWindow = Math.max(num, currentWindow + num);
        if (currentWindow > bigWindow)
            bigWindow = currentWindow;
    }
    return bigWindow;
};
// some test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
