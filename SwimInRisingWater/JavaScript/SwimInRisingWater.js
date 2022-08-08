// Solution for: https://leetcode.com/problems/swim-in-rising-water/
const swimInWater = (grid) => {
    let visited = new Set();
    let time = 0;
    let gridLength = grid.length;
    let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    const dfs = (root, child) => {
        if (root < 0 || root > gridLength - 1 || child < 0 || child > gridLength - 1 || time < grid[root][child] || visited.has(root * gridLength + child))
            return;
        visited.add(root * gridLength + child);
        for (let [r, c] of directions)
            dfs(root + r, child + c);
    };
    while (!visited.has(gridLength * gridLength - 1)) {
        visited.clear();
        dfs(0, 0);
        time++;
    }
    return time - 1;
};
// some test cases
console.log(swimInWater([[0, 2], [1, 3]])); // 3
console.log(swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]])); // 16
