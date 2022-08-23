// Solution for: https://leetcode.com/problems/maximum-path-quality-of-a-graph/
const initializeGraph = (size) => {
    let graph = [];
    for (let i = 0; i < size; i++) {
        graph.push([]);
    }
    return graph;
};
const packUndirectedGraphCost = (graph, edges) => {
    for (const [u, v, cost] of edges) {
        graph[u].push([v, cost]);
        graph[v].push([u, cost]);
    }
};
let value, graph, res, depth;
const dfs = (cur, time, sum) => {
    if (time < 0)
        return;
    depth[cur]++;
    if (depth[cur] == 1)
        sum += value[cur];
    if (cur == 0)
        res = Math.max(sum, res);
    for (const [child, cost] of graph[cur])
        dfs(child, time - cost, sum);
    depth[cur]--;
};
const maximalPathQuality = (values, edges, maxTime) => {
    let length = values.length;
    value = values, graph = initializeGraph(length), res = 0, depth = Array(length).fill(0);
    packUndirectedGraphCost(graph, edges);
    dfs(0, maxTime, 0);
    return res;
};
// some test cases
console.log(maximalPathQuality([0, 32, 10, 43], [[0, 1, 10], [1, 2, 15], [0, 3, 10]], 49)); // 75
console.log(maximalPathQuality([5, 10, 15, 20], [[0, 1, 10], [1, 2, 10], [0, 3, 10]], 30)); // 25
console.log(maximalPathQuality([1, 2, 3, 4], [[0, 1, 10], [1, 2, 11], [2, 3, 12], [1, 3, 13]], 50)); // 7
