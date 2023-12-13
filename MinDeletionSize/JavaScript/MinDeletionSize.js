// Solution for: https://leetcode.com/problems/delete-columns-to-make-sorted/
var minDeletionSize = function (strs) {
    var strsSize = strs[0].length;
    var length = strs.length;
    var deletions = 0;
    for (var i = 0; i < strsSize; i++) {
        var values = [];
        for (var j = 1; j < length; j++) {
            if (strs[j - 1].charCodeAt(i) > strs[j].charCodeAt(i)) {
                deletions++;
                break;
            }
        }
    }
    return deletions;
};
// some tests
console.log(minDeletionSize(["cba", "daf", "ghi"])); // 1
console.log(minDeletionSize(["a", "b"])); // 0
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // 3
