// Solution for: https://leetcode.com/problems/count-largest-group/
var countLargestGroup = function (n) {
    var count = {};
    var largestCount = -Infinity;
    var returnVal = 0;
    for (var i = 1; i <= n; i++) {
        var sum = 0;
        var num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        count[sum] ? count[sum] += 1 : count[sum] = 1;
        largestCount = Math.max(largestCount, count[sum]);
    }
    for (var key in count) {
        if (count[key] === largestCount) {
            returnVal++;
        }
    }
    return returnVal++;
};
// some test cases
console.log(countLargestGroup(13)); // 4
console.log(countLargestGroup(2)); // 2
console.log(countLargestGroup(15)); // 6
console.log(countLargestGroup(24)); // 5
