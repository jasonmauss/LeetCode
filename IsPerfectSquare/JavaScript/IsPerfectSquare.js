// Solution for: https://leetcode.com/problems/valid-perfect-square/
function isPerfectSquare(num) {
    var lesserNum = 1;
    var higherNum = num;
    while (lesserNum <= higherNum) {
        var middleNum = Math.floor((lesserNum + higherNum) / 2);
        var squaredResult = middleNum * middleNum;
        if (squaredResult === num)
            return true;
        else if (squaredResult < num)
            lesserNum = middleNum + 1;
        else
            higherNum = middleNum - 1;
    }
    return false;
}
;
// some test cases
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
