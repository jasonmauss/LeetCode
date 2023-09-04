// Solution for: https://leetcode.com/problems/binary-search/
const search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        }
        else if (nums[middle] < target) {
            left = middle + 1;
        }
        else if (nums[middle] > target) {
            right = middle - 1;
        }
    }
    return -1;
};
// some test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
