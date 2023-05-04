// Solution for: https://leetcode.com/problems/sum-of-all-subset-xor-totals/
const subsetXORSum = (nums) => {
    let subsetXoRs = [];
    const backtrack = (currentXoR, id) => {
        subsetXoRs.push(currentXoR);
        for (let i = id; i < nums.length; i++) {
            backtrack(currentXoR ^ nums[i], i + 1);
        }
    };
    backtrack(0, 0);
    return subsetXoRs.reduce((acc, curr) => acc + curr, 0);
};
// some test cases
console.log(subsetXORSum([1, 3])); // 6
console.log(subsetXORSum([5, 1, 6])); // 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // 480
