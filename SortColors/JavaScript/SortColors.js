// Solution for: https://leetcode.com/problems/sort-colors/
/**
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    let i = 0, lo = 0, hi = nums.length - 1;
    const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
    while (i <= hi) {
        if (nums[i] > 1)
            swap(i, hi--);
        else if (nums[i] < 1)
            swap(i++, lo++);
        else
            i++;
    }
};
// some test cases
console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
