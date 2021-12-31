// Solution for: https://leetcode.com/problems/soup-servings/
var soupServings = function (n) {
    // The values get into 0.9999xxxxxx after 4800+
    // but just to be safe we'll use a threshold of 5k
    if (n >= 5000)
        return 1;
    var recursiveFunc = function (aServing, bServing, cache) {
        if (cache === void 0) { cache = new Map(); }
        if (aServing <= 0 && bServing <= 0)
            return 0.5;
        if (aServing <= 0)
            return 1;
        if (bServing <= 0)
            return 0;
        // store answers in the cache for easy retrieval
        // and less execution needed later on
        var cacheKey = "A-" + aServing + " B-" + bServing;
        if (cache.has(cacheKey))
            return cache.get(cacheKey);
        var r = 0.25 * (recursiveFunc(aServing - 100, bServing, cache) +
            recursiveFunc(aServing - 75, bServing - 25, cache) +
            recursiveFunc(aServing - 50, bServing - 50, cache) +
            recursiveFunc(aServing - 25, bServing - 75, cache));
        cache.set(cacheKey, r);
        return r;
    };
    return recursiveFunc(n, n);
};
// some test cases
console.log(soupServings(50)); // 0.62500
console.log(soupServings(100)); // 0.71875
