// Solution for: https://leetcode.com/problems/parallel-courses-iii/
const minimumTime = (n, relations, time) => {
    let edges = {};
    const longestPath = (node) => {
        if (memo[node] !== undefined) {
            return memo[node];
        }
        let len = 0;
        let max = 0;
        if (edges[node] !== undefined) {
            for (let i = 0; i < edges[node].length; i++) {
                len = longestPath(edges[node][i]);
                max = Math.max(max, len);
            }
        }
        memo[node] = time[node - 1] + max;
        return memo[node];
    };
    for (let i = 0; i < relations.length; i++) {
        if (edges[relations[i][1]] === undefined) {
            edges[relations[i][1]] = [];
        }
        edges[relations[i][1]].push(relations[i][0]);
    }
    let max = 0;
    let timeRequired = 0;
    let memo = {};
    for (let i = 1; i <= n; i++) {
        timeRequired = longestPath(i);
        max = Math.max(max, timeRequired);
    }
    return max;
};
// some test cases
console.log(minimumTime(3, [[1, 3], [2, 3]], [3, 2, 5])); // 8
console.log(minimumTime(5, [[1, 5], [2, 5], [3, 5], [3, 4], [4, 5]], [1, 2, 3, 4, 5])); // 12
