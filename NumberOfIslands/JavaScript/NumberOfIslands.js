// Solution for: https://leetcode.com/problems/number-of-islands/
var numIslands = function (grid) {
    var islandCount = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                helper(i, j, grid);
            }
        }
    }
    return islandCount;
};
var helper = function (i, j, grid) {
    grid[i][j] = '0';
    if (i > 0 && grid[i - 1][j] === '1') {
        helper(i - 1, j, grid);
    }
    if (i < grid.length - 1 && grid[i + 1][j] === '1') {
        helper(i + 1, j, grid);
    }
    if (j > 0 && grid[i][j - 1] === '1') {
        helper(i, j - 1, grid);
    }
    if (j < grid[i].length - 1 && grid[i][j + 1] === '1') {
        helper(i, j + 1, grid);
    }
};
// some test cases
console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
])); // 1
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])); // 3
