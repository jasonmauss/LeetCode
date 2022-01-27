let preSum = [];
let memo = [];
let K = 0;
// Solution for: https://leetcode.com/problems/minimum-cost-to-merge-stones/
const mergeStones = (stones, k) => {
    if (stones.length === 1)
        return 0;
    this.k = K;
    let stonesLen = stones.length;
    memo = new Array(stonesLen + 1);
    preSum = new Array(stonesLen + 1);
    buildPreSum(stones, K);
    let result = mergeStonesRecursive(1, stones.length, 1, stones);
    return result === Number.MAX_VALUE ? -1 : result;
};
const buildPreSum = (stones, k) => {
    preSum[0] = 0;
    for (let i = 1; i < preSum.length; i++) {
        preSum[i] = preSum[i - 1] + stones[i - 1];
    }
};
const mergeStonesRecursive = (i, j, targetPiles, stones) => {
    if (memo[i][j][targetPiles] !== 0)
        return memo[i][j][targetPiles];
    if (j - i + 1 < targetPiles)
        return Number.MAX_VALUE;
    if (i === j)
        return (targetPiles === 1) ? 0 : Number.MAX_VALUE;
    if (targetPiles === 1) {
        let subMinCost = mergeStonesRecursive(i, j, K, stones);
        if (subMinCost !== Number.MAX_VALUE) {
            memo[i][j][targetPiles] = preSum[j] - preSum[i - 1] + subMinCost;
        }
        else {
            memo[i][j][targetPiles] = subMinCost;
        }
        return memo[i][j][targetPiles];
    }
    let minCost = Number.MAX_VALUE;
    for (let k = i; k <= j - 1; k++) {
        let leftCost = mergeStonesRecursive(i, k, targetPiles - 1, stones);
        if (leftCost === Number.MAX_VALUE)
            continue;
        let rightCost = mergeStonesRecursive(k + 1, j, 1, stones);
        if (rightCost === Number.MAX_VALUE)
            continue;
        minCost = Math.min(leftCost + rightCost, minCost);
    }
    memo[i][j][targetPiles] = minCost;
    return minCost;
};
// some test cases
console.log(mergeStones([3, 2, 4, 1], 2)); // 20
console.log(mergeStones([3, 2, 4, 1], 3)); // -1
console.log(mergeStones([3, 5, 1, 2, 6], 3)); // 25
