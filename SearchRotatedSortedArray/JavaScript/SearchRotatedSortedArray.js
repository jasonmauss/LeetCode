// Solution for: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
const search = (nums, target) => {
    return nums.filter((x) => x === target).length > 0;
};
// some test cases
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
