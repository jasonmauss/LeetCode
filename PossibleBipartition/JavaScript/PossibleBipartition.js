// Solution for: https://leetcode.com/problems/possible-bipartition/
const possibleBipartition = (n, dislikes) => {
    const graph = [...Array(n + 1)].map(() => []);
    const visited = Array(n + 1).fill(false);
    const color = Array(n + 1).fill(0);
    for (let [u, v] of dislikes) {
        graph[u].push(v);
        graph[v].push(u);
    }
    for (let i = 1; i <= n; i++) {
        if (!colorNodes(i))
            return false;
    }
    return true;
    function colorNodes(node) {
        if (visited[node])
            return true;
        const currColor = new Set([1, 2]);
        // remove colors used by neighbors
        for (let child of graph[node]) {
            if (color[child] === 1)
                currColor.delete(1);
            if (color[child] === 2)
                currColor.delete(2);
        }
        // no color is available return false
        if (currColor.size === 0)
            return false;
        // assign the smallest available color
        color[node] = Math.min(...currColor);
        visited[node] = true;
        for (let child of graph[node]) {
            if (!colorNodes(child))
                return false;
        }
        return true;
    }
};
// some test cases
console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])); // true
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])); // false
console.log(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])); // false
