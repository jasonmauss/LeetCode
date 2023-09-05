// Solution for: https://leetcode.com/problems/missing-number/
const missingNumber = (nums) => {
    const n = nums.length;
    const shouldBeTotal = (n * (n + 1)) / 2;
    const actualTotal = nums.reduce((a, b) => a + b);
    return shouldBeTotal - actualTotal;
};
// some test cases
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
