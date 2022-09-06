// Solution for: https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
const minCost = (n: number, cuts: number[]): number => {

    cuts.sort((b, a) => b - a);
    cuts = [0, ...cuts, n];

    const dp = Array.from({ length: cuts.length - 1 }, () => Array(cuts.length).fill(Infinity));

    for (let i = 1; i < cuts.length; i++)
        dp[i - 1][i] = 0;

    for (let cut = 2; cut < cuts.length; cut++) {
        for (let i = 0; i + cut < cuts.length; i++) {
            for (let j = i + 1; j < i + cut; j++) {
                dp[i][i + cut] = Math.min(dp[i][i + cut], cuts[i + cut] - cuts[i] + dp[i][j] + dp[j][i + cut]
                );
            }
        }
    }

    return dp[0].at(-1);

};






// some test cases
console.log(minCost(7, [1,3,4,5])); // 16
console.log(minCost(9, [5,6,1,4,2])); // 22