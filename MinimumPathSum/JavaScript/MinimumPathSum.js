// Solution for: https://leetcode.com/problems/minimum-path-sum/description/
var minPathSum = function (grid) {
    var rowCount = grid.length;
    var colCount = grid[0].length;
    // populate a two-dimensional array with zeros
    var pathValues = Array.from(Array(rowCount), function (v, k) { return new Array(colCount).fill(0); });
    var pathSum = 0;
    for (var i = 0; i < rowCount; ++i) {
        pathSum += grid[i][0];
        pathValues[i][0] = pathSum;
    }
    pathSum = 0;
    for (var j = 0; j < colCount; ++j) {
        pathSum += grid[0][j];
        pathValues[0][j] = pathSum;
    }
    for (var i = 1; i < rowCount; ++i) {
        for (var j = 1; j < colCount; ++j) {
            var minPath = Math.min(pathValues[i - 1][j], pathValues[i][j - 1]);
            pathValues[i][j] = grid[i][j] + minPath;
        }
    }
    return pathValues[rowCount - 1][colCount - 1];
};
// some test cases
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // 7
console.log(minPathSum([[1, 2, 3], [4, 5, 6]])); // 12
