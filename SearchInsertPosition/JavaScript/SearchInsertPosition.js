// Solution for: https://leetcode.com/problems/search-insert-position/
// first approach with linear search (slower)
// const searchInsert = (nums: number[], target: number): number => {
//     if(nums.length === 0 || target === 0 || (nums.length > 0 && nums[0] > target)) {
//         return 0;
//     }
//     for(let i: number = 0; i < nums.length; i++) {
//         if(nums[i] === target) return i;
//         if(nums[i] < target && nums.length >= (i + 1) && nums[i + 1] > target) {
//             return i + 1;
//         }
//     }
//     // if it's not found after looping through the entire
//     // array and it's hypothetical position wasn't found either
//     // then it would have to be inserted (if maintaining order)
//     // at the end of the array (so last position)
//     return nums.length;
// };
// second approach with binary search (faster)
var searchInsert = function (nums, target) {
    if (target === 0) {
        return 0;
    }
    var before = 0;
    var upper = nums.length - 1;
    while (before <= upper) {
        var mid = Math.floor((upper - before) / 2) + before;
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            before = mid + 1;
        }
        else {
            upper = mid - 1;
        }
    }
    return before;
};
// some test cases
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([2, 5], 1)); // 0
