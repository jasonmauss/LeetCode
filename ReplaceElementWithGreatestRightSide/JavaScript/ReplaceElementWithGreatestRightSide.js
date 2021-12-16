// Solution for: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
var replaceElements = function (arr) {
    var maxNumber = -1;
    for (var i = arr.length - 1; i >= 0; i--) {
        var temp = arr[i];
        arr[i] = maxNumber;
        maxNumber = Math.max(maxNumber, temp);
    }
    return arr;
};
// some test cases
console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]
