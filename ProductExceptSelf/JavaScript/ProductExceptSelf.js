// Solution for: https://leetcode.com/problems/product-of-array-except-self/
const productExceptSelf = (nums) => {
    const numsLength = nums.length;
    const result = new Array(numsLength).fill(1);
    const slidingSum = new Array(2).fill(1);
    for (let i = 1; i < numsLength; i++) {
        slidingSum[0] *= nums[i - 1];
        slidingSum[1] *= nums[numsLength - i];
        result[i] *= slidingSum[0];
        result[numsLength - i - 1] *= slidingSum[1];
    }
    return result;
};
// some test cases
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
