// Solution for: https://leetcode.com/problems/cheapest-flights-within-k-stops/
var findCheapestPrice = function (n, flights, src, dst, k) {
    var min = new Array(n + 1).fill(Infinity);
    min[src] = 0;
    for (var j = 0; j < k + 1; j++) {
        var newmin = [].concat(min);
        for (var i = 0; i < flights.length; i++) {
            var f = flights[i], a = f[0], b = f[1], c = f[2];
            newmin[b] = Math.min(newmin[b], min[a] + c);
        }
        min = [].concat(newmin);
    }
    return min[dst] != Infinity ? min[dst] : -1;
};
// some test cases
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)); // 500
