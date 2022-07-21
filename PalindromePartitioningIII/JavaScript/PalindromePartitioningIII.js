// Solution for: https://leetcode.com/problems/palindrome-partitioning-iii/
var palindromePartition = function (s, k) {
    var n = s.length;
    var dp = Array.from({ length: n }, function () { return Array(k + 1).fill(100); }); // k can't be more than 100 in size
    var cost = Array.from({ length: n }, function () { return Array(n).fill(0); });
    for (var len = 1; len < n; len++) {
        for (var i = 0; i < n - len; i++) {
            var j = i + len;
            cost[i][j] = cost[i + 1][j - 1] + (s[i] == s[j] ? 0 : 1);
        }
    }
    for (var i = 0; i < n; i++) {
        dp[i][1] = cost[0][i];
        for (var kk = 2; kk <= k; kk++) {
            for (var j = 0; j < i; j++) {
                dp[i][kk] = Math.min(dp[i][kk], dp[j][kk - 1] + cost[j + 1][i]);
            }
        }
    }
    return dp[n - 1][k];
};
// some test cases
console.log(palindromePartition("abc", 2)); // 1
console.log(palindromePartition("aabbc", 3)); // 0
console.log(palindromePartition("leetcode", 8)); // 0
