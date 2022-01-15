// Solution for: https://leetcode.com/problems/cheapest-flights-within-k-stops/
var findCheapestPrice = function (n, flights, src, dst, k) {
    var map = new Map();
    for (var i = 0; i < flights.length; i++) {
        var _a = flights[i], start = _a[0], end = _a[1], price = _a[2];
        var edges = map.get(start) || [];
        edges.push([end, price]);
        map.set(start, edges);
    }
    var queue = [[0, src, k + 1]];
    while (queue.length) {
        var _b = queue.shift(), price = _b[0], city = _b[1], stops = _b[2];
        if (city === dst)
            return price;
        if (stops > 0) {
            var nextFlights = map.get(city) || [];
            for (var i = 0; i < nextFlights.length; i++) {
                var _c = nextFlights[i], next = _c[0], cost = _c[1];
                queue.push([cost + price, next, stops - 1]);
            }
            queue.sort(function (a, b) { return a[0] - b[0]; });
        }
    }
    return -1;
};
// some test cases
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)); // 200
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)); // 500
