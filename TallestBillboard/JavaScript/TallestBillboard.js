// Solution for: https://leetcode.com/problems/tallest-billboard/
const solve = (i, sum, rods, dp) => {
    if (i == rods.length) {
        if (sum == 0) {
            return 0;
        }
        else {
            return -5000;
        }
    }
    if (dp[i][sum + 5000] != -1) {
        return dp[i][sum + 5000];
    }
    let val = solve(i + 1, sum, rods, dp);
    val = Math.max(val, solve(i + 1, sum + rods[i], rods, dp) + rods[i]);
    val = Math.max(val, solve(i + 1, sum - rods[i], rods, dp));
    dp[i][sum + 5000] = val;
    return val;
};
const tallestBillboard = (rods) => {
    let length = rods.length;
    if (length <= 1)
        return 0;
    let dp = [];
    for (let i = 0; i < length + 5; i++) {
        dp[i] = [];
        for (let j = 0; j < 5005 * 2; j++) {
            dp[i][j] = -1;
        }
    }
    return solve(0, 0, rods, dp);
};
// some test cases
console.log(tallestBillboard([1, 2, 3, 6])); // 6
console.log(tallestBillboard([1, 2, 3, 4, 5, 6])); // 10
console.log(tallestBillboard([1, 2])); // 0
