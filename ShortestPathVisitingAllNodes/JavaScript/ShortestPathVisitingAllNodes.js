// Solution for: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
var shortestPathLength = function (graph) {
    var graphLength = graph.length;
    var queue = [];
    var set = new Set();
    var finish = (1 << graphLength) - 1;
    for (var i = 0; i < graphLength; i++) {
        var tempMask = (1 << i);
        set.add(tempMask | (1 << (i + 16)));
        queue.push({ mask: tempMask, node: i, cost: 0 });
    }
    var curr, neighbors, key, bitMask, cost;
    while (queue.length) {
        curr = queue.shift();
        if (curr.mask === finish) {
            return curr.cost;
        }
        else {
            neighbors = graph[curr.node];
            cost = curr.cost + 1;
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                bitMask = curr.mask | (1 << neighbor);
                key = bitMask | (1 << (neighbor + 16));
                if (!set.has(key)) {
                    queue.push({ mask: bitMask, node: neighbor, cost: cost });
                    set.add(key);
                }
            }
        }
    }
    return -1;
};
console.log(shortestPathLength([[1, 2, 3], [0], [0], [0]])); // 4
console.log(shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]])); // 4
