// Solution for: https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/
var minOperations = function (nums1, nums2) {
    var _a, _b;
    if (nums1.length * 6 < nums2.length || nums2.length * 6 < nums1.length)
        return -1;
    var one = nums1.reduce(function (a, b) { return a + b; });
    var two = nums2.reduce(function (a, b) { return a + b; });
    if (two > one) {
        _a = [two, one], one = _a[0], two = _a[1];
        _b = [nums2, nums1], nums1 = _b[0], nums2 = _b[1];
    }
    nums1.sort(function (a, b) { return b - a; });
    nums2.sort(function (a, b) { return a - b; });
    var i = 0, j = 0;
    while (one > two) {
        if (nums1[i] - 1 > 6 - nums2[j] || j === nums2.length) {
            one -= nums1[i] - 1;
            i++;
        }
        else {
            two += 6 - nums2[j];
            j++;
        }
    }
    return i + j;
};
// some test cases
console.log(minOperations([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2])); // 3
console.log(minOperations([1, 1, 1, 1, 1, 1, 1], [6])); // -1
console.log(minOperations([6, 6], [1])); // 3
