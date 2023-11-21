// Solution for: https://leetcode.com/problems/sort-by/
var sortBy = function (arr, fn) {
    return arr.sort(function (a, b) { return fn(a) - fn(b); });
};
// some tests
var arr1 = [5, 4, 1, 2, 3], fn1 = function (x) { return x; };
console.log(sortBy(arr1, fn1)); // [1, 2, 3, 4, 5]
var arr2 = [{ "x": 1 }, { "x": 0 }, { "x": -1 }], fn2 = function (d) { return d.x; };
console.log(sortBy(arr2, fn2)); // [{"x": -1}, {"x": 0}, {"x": 1}]
var arr3 = [[3, 4], [5, 2], [10, 1]], fn3 = function (x) { return x[1]; };
console.log(sortBy(arr3, fn3)); // [[10, 1], [5, 2], [3, 4]]
