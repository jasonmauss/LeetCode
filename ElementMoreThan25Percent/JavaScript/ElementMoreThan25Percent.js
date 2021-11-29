// Solution for: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
var findSpecialInteger = function (arr) {
    var numberMap = new Map();
    var occurenceMinimum = Math.floor(arr.length / 4);
    for (var i = 0; i < arr.length; i++) {
        var curVal = arr[i];
        numberMap.set(curVal, numberMap.has(curVal) ? numberMap.get(curVal) + 1 : 1);
        if (numberMap.get(curVal) > occurenceMinimum) {
            return curVal;
        }
    }
    ;
    return 0;
};
// some test cases
console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // 6
console.log(findSpecialInteger([1, 1])); // 1
