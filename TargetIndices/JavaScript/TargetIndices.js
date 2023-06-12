// Solution for: https://leetcode.com/problems/find-target-indices-after-sorting-array/
const targetIndices = (nums, target) => {
    return [0];
};
// some test cases
console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1,2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); // [4]
