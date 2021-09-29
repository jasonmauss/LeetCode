// Solution for: https://leetcode.com/problems/check-if-n-and-its-double-exist/
var checkIfExist = function (arr) {
    var values = new Set();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && values.has(arr[i] / 2) || values.has(arr[i] * 2))
            return true;
        values.add(arr[i]);
    }
    return false;
};
// some test cases
console.log(checkIfExist([10, 2, 5, 3])); // true, 10 and 5
console.log(checkIfExist([7, 1, 14, 11])); // true, 14 and 7
console.log(checkIfExist([3, 1, 7, 11])); // false
console.log(checkIfExist([-10, 1, -5, 3, 5, 2])); // true
console.log(checkIfExist([-10, 1, 3, 5])); // false
console.log(checkIfExist([4, -7, 11, 4, 18])); // false
