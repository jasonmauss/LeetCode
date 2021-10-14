// Solution for: https://leetcode.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function (cost) {
    for (var i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 2], cost[i - 1]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
// some test cases
console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
