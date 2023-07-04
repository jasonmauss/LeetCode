// Solution for: https://leetcode.com/problems/next-permutation/
/**
 Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums) => {
    for (let smallIndex = nums.length - 2; smallIndex >= 0; smallIndex--) {
        for (let largeIndex = nums.length - 1; largeIndex >= smallIndex + 1; largeIndex--) {
            if (nums[smallIndex] < nums[largeIndex]) {
                [nums[largeIndex], nums[smallIndex]] = [nums[smallIndex], nums[largeIndex]];
                const remainder = nums.splice(smallIndex + 1);
                remainder.sort((a, b) => a - b);
                nums.push(...remainder);
                return;
            }
        }
    }
    nums.sort((a, b) => a - b);
};
// some test cases
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // [1,3,2]
nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums); // [1,2,3]
nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums); // [1,5,1]
