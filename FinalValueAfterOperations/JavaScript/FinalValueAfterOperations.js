// Solution for: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
var finalValueAfterOperations = function (operations) {
    var initialValue = 0;
    operations.forEach(function (value) {
        initialValue = value.indexOf('+') !== -1 ? initialValue + 1 : initialValue - 1;
    });
    return initialValue;
};
// some test cases
console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0
