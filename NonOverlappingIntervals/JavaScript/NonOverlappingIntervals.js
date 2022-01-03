// Solution for: https://leetcode.com/problems/non-overlapping-intervals/
var eraseOverlapIntervals = function (intervals) {
    var result = -1;
    if (intervals.length < 2)
        return 0;
    intervals.sort(function (a, b) { return a[1] - b[1]; });
    var curInterval = intervals[0];
    for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
        var i = intervals_1[_i];
        if (curInterval[1] > i[0]) {
            result++;
        }
        else {
            curInterval = i;
        }
    }
    return result;
};
// some test cases
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0
