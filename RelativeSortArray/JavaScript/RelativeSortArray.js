// Solution for: https://leetcode.com/problems/relative-sort-array/
var relativeSortArray = function (arr1, arr2) {
    var relativeSorted = [];
    var included = [];
    for (var i = 0; i < arr2.length; i++) {
        var compareValue = arr2[i];
        for (var j = 0; j < arr1.length; j++) {
            if (arr1[j] === compareValue) {
                included.push.apply(included, arr1.splice(j, 1));
                j--;
            }
        }
    }
    relativeSorted.push.apply(relativeSorted, included);
    relativeSorted.push.apply(relativeSorted, arr1.sort(function (a, b) { return a - b; }));
    return relativeSorted;
};
// some tests
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // [22,28,8,6,17,44]
