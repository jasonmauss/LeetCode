// Solution for: https://leetcode.com/problems/dice-roll-simulation/
const dieSimulator = (n, rollMax) => {
    const MOD = 10 ** 9 + 7;
    if (n <= 0)
        return 0;
    const dp = new Array(6);
    for (let i = 0; i < 6; ++i) {
        const sub = new Array(n);
        for (let j = 0; j < n; ++j) {
            sub[j] = new Array(rollMax[i] + 1).fill(j == 0 ? 1 : 0);
        }
        dp[i] = sub;
    }
    for (let m = 1; m < n; ++m) {
        for (let i = 0; i < 6; ++i) {
            for (let k = 1; k <= rollMax[i]; ++k) {
                dp[i][m][k] = 0;
                for (let j = 0; j < 6; ++j) {
                    if (j == i)
                        dp[i][m][k] += k > 1 ? dp[i][m - 1][k - 1] : 0;
                    else
                        dp[i][m][k] += dp[j][m - 1][rollMax[j]];
                    dp[i][m][k] %= MOD;
                }
            }
        }
    }
    let ret = 0;
    for (let i = 0; i < 6; ++i) {
        ret += dp[i][n - 1][rollMax[i]];
        ret %= MOD;
    }
    return ret;
};
// some test cases
console.log(dieSimulator(2, [1, 1, 2, 2, 2, 3])); // 34
console.log(dieSimulator(2, [1, 1, 1, 1, 1, 1])); // 30
console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3])); // 181
