// Solution for: https://leetcode.com/problems/squares-of-a-sorted-array/
var sortedSquares = function (nums) {
    var squares = [];
    nums.forEach(function (value) {
        squares.push(value * value);
    });
    return squares.sort(function (a, b) { return a - b; });
};
// some test cases
console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
