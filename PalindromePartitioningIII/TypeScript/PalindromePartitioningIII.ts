// Solution for: https://leetcode.com/problems/palindrome-partitioning-iii/
const palindromePartition = (s: string, k: number): number => {

    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(k + 1).fill(100)); // k can't be more than 100 in size
    const cost = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            const j = i + len;
            cost[i][j] = cost[i + 1][j - 1] + (s[i] == s[j] ? 0 : 1);
        }
    }
    
    for (let i = 0; i < n; i++) {
        dp[i][1] = cost[0][i];
        for (let kk = 2; kk <= k; kk++) {
            for (let j = 0; j < i; j++) {
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