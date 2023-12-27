// Solution for: https://leetcode.com/problems/optimal-partition-of-string/
var partitionString = function (s) {
    var count = 0;
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            count++;
            obj = {};
        }
        obj[s[i]] = 1;
    }
    return count + 1;
};
// some tests
console.log(partitionString('abacaba')); // 4
console.log(partitionString('ssssss')); // 6
