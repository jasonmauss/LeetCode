// Solution for: https://leetcode.com/problems/unique-binary-search-trees/
var numTrees = function (n) {
    var factCache = {};
    var factorial = function (n) {
        if (factCache[n])
            return factCache[n];
        if (n === 1)
            return 1;
        var factorialResults = n * factorial(n - 1);
        factCache[n] = factorialResults;
        return factorialResults;
    };
    return factorial(2 * n) / (factorial(n + 1) * factorial(n));
};
// some test cases
console.log(numTrees(3)); // 5
console.log(numTrees(1)); // 1
