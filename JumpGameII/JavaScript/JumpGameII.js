// Solution for: https://leetcode.com/problems/jump-game-ii/description/
const jump = (nums) => {
    const jumps = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    jumps[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= i - j) {
                jumps[i] = Math.min(jumps[i], jumps[j] + 1);
            }
        }
    }
    return jumps[nums.length - 1];
};
// some test cases
console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
