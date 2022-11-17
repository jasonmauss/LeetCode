// Solution for: https://leetcode.com/problems/distinct-subsequences/
const numDistinct = (s, t) => {
    // start with an array containing all possible results for each char in t
    let dp = Array(t.length + 1).fill(0);
    // initialize to an empty result
    dp[0] = 1;
    // Iterate through s
    for (let i = 0; i < s.length; i++) {
        // Iterate through t (from end to start so we don't process data that we've just entered)
        for (let j = dp.length - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[j + 1] += dp[j];
            }
        }
    }
    return dp[t.length];
};
// some test cases
console.log(numDistinct("rabbbit", "rabbit")); // 3
console.log(numDistinct("babgbag", "bag")); // 5
