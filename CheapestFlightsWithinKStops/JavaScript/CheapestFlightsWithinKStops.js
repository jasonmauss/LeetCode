// Solution for: https://leetcode.com/problems/cheapest-flights-within-k-stops/
var findCheapestPrice = function (n, flights, src, dst, k) {
    var mn = new Array(n + 1).fill(Infinity);
    mn[src] = 0;
    for (var j = 0; j < k + 1; j++) {
        var newmn = [].concat(mn);
        for (var i = 0; i < flights.length; i++) {
            var f = flights[i], a = f[0], b = f[1], c = f[2];
            newmn[b] = Math.min(newmn[b], mn[a] + c);
        }
        mn = [].concat(newmn);
    }
    return mn[dst] != Infinity ? mn[dst] : -1;
};
// some test cases
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)); // 500
