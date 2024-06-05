// Solution for: https://leetcode.com/problems/next-greater-element-i
var nextGreaterElement = function (nums1, nums2) {
    var returnElements = [];
    var elementFound = false;
    for (var _i = 0, nums1_1 = nums1; _i < nums1_1.length; _i++) {
        var num = nums1_1[_i];
        var valToPush = -1;
        for (var i = 0; i < nums2.length; i++) {
            if (num === nums2[i]) {
                elementFound = true;
            }
            if (elementFound && nums2[i] > num) {
                valToPush = nums2[i];
            }
            if (i === nums2.length - 1 || valToPush !== -1) {
                returnElements.push(valToPush);
                break;
            }
        }
        elementFound = false;
    }
    return returnElements;
};
// some test cases
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]
