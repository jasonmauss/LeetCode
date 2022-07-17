// Solution for: https://leetcode.com/problems/paint-house-iii/
var dp = null;
var nColors, nHouses;
var nTarget;
var minHelp = function (houses, cost, index, previous, hoods) {
    if (index >= houses.length) {
        return (hoods == nTarget) ? 0 : Infinity;
    }
    if (dp[index][previous][hoods] != -1)
        return dp[index][previous][hoods];
    if (nTarget == hoods) {
        if (houses[index] != previous && houses[index] != 0)
            return dp[index][previous][hoods] = Infinity;
        if (houses[index] == previous)
            return dp[index][previous][hoods] = minHelp(houses, cost, index + 1, previous, hoods);
        var v_1 = minHelp(houses, cost, index + 1, previous, hoods);
        if (v_1 != Infinity)
            v_1 += cost[index][previous - 1];
        return dp[index][previous][hoods] = v_1;
    }
    var answer = Infinity;
    if (houses[index] == previous) {
        return dp[index][previous][hoods] = minHelp(houses, cost, index + 1, previous, hoods);
    }
    else if (houses[index] != 0) {
        return dp[index][previous][hoods] = minHelp(houses, cost, index + 1, houses[index], hoods + 1);
    }
    var i, v;
    for (i = 1; i <= nColors; i++) {
        if (previous == i) {
            v = minHelp(houses, cost, index + 1, previous, hoods);
        }
        else {
            v = minHelp(houses, cost, index + 1, i, hoods + 1);
        }
        if (v == Infinity)
            continue;
        v += cost[index][i - 1];
        answer = Math.min(answer, v);
    }
    return dp[index][previous][hoods] = answer;
};
var minCost = function (houses, cost, m, n, target) {
    nColors = n;
    nHouses = m;
    nTarget = target;
    dp = new Array(nHouses);
    var i, j;
    for (i = 0; i < m; i++) {
        dp[i] = new Array(nColors + 2);
        for (j = 0; j <= nColors + 1; j++) {
            dp[i][j] = new Array(target + 1).fill(-1);
        }
    }
    var v = minHelp(houses, cost, 0, nColors + 1, 0);
    return (v == Infinity) ? -1 : v;
};
// some test cases
console.log(minCost([0, 0, 0, 0, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3)); // 9
console.log(minCost([0, 2, 1, 2, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3)); // 11
console.log(minCost([3, 1, 2, 3], [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]], 4, 3, 3)); // -1
