// Solution for: https://leetcode.com/problems/minimum-cost-to-merge-stones/
const mergeStones = (stones: number[], k: number): number => {

    const n = stones.length;
    if ((n - 1) % (k - 1)) return -1;

    const sums = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        sums[i + 1] = sums[i] + stones[i];
    }

    // dp[i][j][k] is min cost to merge subarray i ~ j into k piles.
    const dp = [...Array(n)].map(() => [...Array(n)].map(() => Array(k + 1).fill(Infinity)));
    for (let i = 0; i < n; i++) {
        dp[i][i][1] = 0;
    }

    for (let l = 2; l <= n; l++) { // sub problem length
        for (let i = 0; i <= n - l; i++) { // start
        const j = i + l - 1; // end
        for (let k = 2; k <= k; k++) { // piles
            for (let m = i; m < j; m += k - 1) { // split point
            dp[i][j][k] = Math.min(dp[i][j][k], dp[i][m][1] + dp[m + 1][j][k - 1]);
            }
        }
        dp[i][j][1] = dp[i][j][k] + sums[j + 1] - sums[i];
        }
    }
    return dp[0][n - 1][1];

};

// some test cases
console.log(mergeStones([3,2,4,1], 2)); // 20
console.log(mergeStones([3,2,4,1], 3)); // -1
console.log(mergeStones([3,5,1,2,6], 3)); // 25