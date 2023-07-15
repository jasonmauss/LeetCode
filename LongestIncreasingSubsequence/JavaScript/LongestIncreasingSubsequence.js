// Solution for: https://leetcode.com/problems/longest-increasing-subsequence/
const lengthOfLIS = (nums) => {
    let numbersLength = nums.length;
    let sequenceLengths = new Array(numbersLength).fill(1);
    for (let i = 1; i < numbersLength; i++) {
        let ans = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && sequenceLengths[i] < sequenceLengths[j] + 1) {
                ans = Math.max(ans, 1 + sequenceLengths[j]);
            }
        }
        sequenceLengths[i] = ans;
    }
    return Math.max(...sequenceLengths);
};
// some test cases
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
