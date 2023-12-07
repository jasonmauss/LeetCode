// Solution for: https://leetcode.com/problems/pancake-sorting/
var pancakeSort = function (arr) {
    var pancakeFlips = [];
    for (var i = arr.length; i > 0; --i) {
        if (i === arr[i - 1])
            continue;
        var element = 1 + arr.indexOf(i);
        pancakeFlips.push(element, i);
        reverseArraySegment(arr, 0, element);
        reverseArraySegment(arr, 0, i);
    }
    return pancakeFlips;
};
function reverseArraySegment(arraySegment, minPos, maxPos) {
    if (minPos === void 0) { minPos = 0; }
    if (maxPos === void 0) { maxPos = arraySegment.length; }
    --maxPos;
    while (minPos < maxPos) {
        var tempVal = arraySegment[minPos];
        arraySegment[minPos++] = arraySegment[maxPos];
        arraySegment[maxPos--] = tempVal;
    }
}
// some tests
console.log(pancakeSort([3, 2, 4, 1])); // [4,2,4,3]
console.log(pancakeSort([1, 2, 3])); // []
