// Solution for: https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    nums1.push.apply(nums1, nums2);
    nums1.sort(function (a, b) { return a - b; });
};
// some test cases
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([1, 2, 0, 0, 0], 2, [2, 5, 6], 3)); // [1,2,2,3,5,6]
