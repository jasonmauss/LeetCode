// Solution for: https://leetcode.com/problems/profitable-schemes/
const profitableSchemes = (n, minProfit, group, profit) => {
    let schemes = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0));
    schemes.forEach(c => c[0] = 1);
    for (let i = 0; i < group.length; i++) {
        for (let j = n; j >= group[i]; j--) {
            for (let k = minProfit; k >= 0; k--) {
                schemes[j][k] = (schemes[j][k] + schemes[j - group[i]][Math.max(0, k - profit[i])]) % (1e9 + 7);
            }
        }
    }
    return schemes[n][minProfit];
};
// some test cases
console.log(profitableSchemes(5, 3, [2, 2], [2, 3])); // 2
console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])); // 7
