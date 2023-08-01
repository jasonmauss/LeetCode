// Solution for: https://leetcode.com/problems/longest-alternating-subarray/
const alternatingSubarray = (nums) => {
    let maxAlternating = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            let currentAlternating = 2;
            for (let j = i + 2; j < nums.length; j++) {
                if (j < nums.length && nums[j] === nums[j - 2]) {
                    currentAlternating++;
                }
                else {
                    break;
                }
            }
            maxAlternating = Math.max(maxAlternating, currentAlternating);
        }
    }
    return maxAlternating;
};
// some test cases
console.log(alternatingSubarray([2, 3, 4, 3, 4])); // 4
console.log(alternatingSubarray([4, 5, 6])); // 2
