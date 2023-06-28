// Solution for: https://leetcode.com/problems/third-maximum-number/
const thirdMax = (nums) => {
    nums.sort((a, b) => b - a);
    const numSet = new Set(nums);
    const distinctValues = [...numSet];
    if (distinctValues.length < 3)
        return Math.max(...distinctValues);
    return distinctValues[2];
};
// some test cases
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2
