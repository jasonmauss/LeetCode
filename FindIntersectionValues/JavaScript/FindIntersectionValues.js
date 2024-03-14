// Solution for: https://leetcode.com/problems/find-common-elements-between-two-arrays/
var findIntersectionValues = function (nums1, nums2) {
    var firstIntersection = 0;
    var secondIntersection = 0;
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var num = nums1_1[_i];
        if (nums2.includes(num))
            firstIntersection++;
    }
    for (var _a = 0, nums2_1 = nums2; _a < nums2_1.length; _a++) {
        var num = nums2_1[_a];
        if (nums1.includes(num))
            secondIntersection++;
    }
    return [firstIntersection, secondIntersection];
};
// some tests[
console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); // [3,4]
console.log(findIntersectionValues([3, 4, 2, 3], [1, 5])); // [0,0]
