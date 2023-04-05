// Solution for: https://leetcode.com/problems/left-and-right-sum-differences/
const leftRigthDifference = (nums) => {
    if (nums.length === 1)
        return [0];
    const leftArray = [];
    const rightArray = [];
    const arrayDifferences = [];
};
// some test cases
console.log(leftRigthDifference([10, 4, 8, 3])); // [15,1,11,22]
console.log(leftRigthDifference([1])); // [0]
