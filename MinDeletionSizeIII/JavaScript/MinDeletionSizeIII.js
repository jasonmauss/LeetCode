// Solution for: https://leetcode.com/problems/delete-columns-to-make-sorted-iii/
var minDeletionSize = function (strs) {
    var totalStrs = strs.length;
    var strSize = strs[0].length;
    var result = strSize - 1;
    var k = 0;
    var dp = new Array(strSize).fill(1);
    for (var i = 0; i < strSize; ++i) {
        for (var j = 0; j < i; ++j) {
            for (k = 0; k < totalStrs; ++k) {
                if (strs[k].charAt(j) > strs[k].charAt(i))
                    break;
            }
            if (k === totalStrs && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
        result = Math.min(result, strSize - dp[i]);
    }
    return result;
};
// some tests
console.log(minDeletionSize(["babca", "bbazb"])); // 3
console.log(minDeletionSize(["edcba"])); // 4
console.log(minDeletionSize(["ghi", "def", "abc"])); // 0
