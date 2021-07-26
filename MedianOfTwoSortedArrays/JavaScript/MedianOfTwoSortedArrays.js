// Solution to https://leetcode.com/problems/median-of-two-sorted-arrays/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function findMedianSortedArrays(nums1, nums2) {
    // combine the two arrays with destructuring syntax
    var combinedNums = __spreadArray(__spreadArray([], nums1), nums2);
    // arrow function to get the median value
    var median = function (numsArray) {
        var mid = Math.floor(numsArray.length / 2);
        var sortedNums = __spreadArray([], numsArray).sort(function (a, b) { return a - b; });
        return numsArray.length % 2 !== 0 ? sortedNums[mid] : (sortedNums[mid - 1] + sortedNums[mid]) / 2;
    };
    return median(combinedNums);
}
// A couple of tests to check the logic
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([1, 2, 3], [3, 4, 5])); // 3
