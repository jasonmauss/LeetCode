// Solution for: https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
var checkOnesSegment = function (s) {
    return !s.includes('01');
};
// some test cases
console.log(checkOnesSegment('1001')); // false
console.log(checkOnesSegment('110')); // true
console.log(checkOnesSegment('1111100000')); // true
console.log(checkOnesSegment('1111100001')); // false
