var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Solution for: https://leetcode.com/problems/pancake-sorting/
var pancakeSort = function (arr) {
    var sortedCopy = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var pancakeFlips = [];
    var flipIt = function (curPos, nextPos) {
        var firstFlip = arr.splice(0, curPos + 1);
        firstFlip.reverse();
        var nextSegment = arr.splice(0, nextPos - curPos);
        var secondFlip = __spreadArray(__spreadArray([], firstFlip, true), nextSegment, true).reverse();
        arr = __spreadArray(__spreadArray([], secondFlip, true), arr, true);
        pancakeFlips.push(curPos + 1, nextPos + 1);
    };
    for (var i = sortedCopy.length - 1; i >= 0; --i) {
        if (arr[i] !== sortedCopy[i]) {
            flipIt(arr.indexOf(sortedCopy[i]), i);
        }
    }
    return pancakeFlips;
};
// some tests
console.log(pancakeSort([3, 2, 4, 1])); // [4,2,4,3]
console.log(pancakeSort([1, 2, 3])); // []
