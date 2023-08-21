// Solution for: https://leetcode.com/problems/move-zeroes/
/**
 Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    // There's no work to be done if there's only one element
    if (nums.length === 1)
        return;
    // this will allow us to know when we can stop iterating through the array
    let zeroesFound = 0;
    // if we encounter a zero, remove it with splice, and append it to the end
    // of the array using push. Also decrement the iterator by 1 so that we don't
    // end up skipping the checking of one of the array elements after removing a zero.
    for (let i = 0; i < nums.length - zeroesFound; i++) {
        if (nums[i] === 0) {
            nums.push(...nums.splice(i, 1));
            zeroesFound++;
            i--;
        }
    }
};
// some test cases
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1,3,12,0,0]
const nums1 = [0];
moveZeroes(nums1);
console.log(nums1); // [0]
const nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // [1,0,0]
