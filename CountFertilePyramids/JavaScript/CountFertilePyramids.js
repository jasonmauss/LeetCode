// Solution for: https://leetcode.com/problems/count-fertile-pyramids-in-a-land/
var countPyramid = function (grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    var result = 0;
    for (var i = 1; i < rows; ++i) {
        for (var j = 1; j < cols - 1; ++j) {
            if (grid[i][j] != 0 && grid[i - 1][j] != 0) {
                grid[i][j] = Math.min(grid[i - 1][j - 1], grid[i - 1][j + 1]) + 1;
                result += grid[i][j] - 1;
            }
        }
    }
    return result;
};
var countPyramids = function (grid) {
    var result = 0;
    result += countPyramid(grid);
    for (var i = 0; i < grid.length; ++i) {
        for (var j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] > 0)
                grid[i][j] = 1;
        }
    }
    for (var i = 0, j = grid.length - 1; i <= j; i++, j--) {
        for (var k = 0; k < grid[i].length; ++k) {
            var m = grid[i][k];
            grid[i][k] = grid[j][k];
            grid[j][k] = m;
        }
    }
    result += countPyramid(grid);
    return result;
};
// some test cases
console.log(countPyramids([[0, 1, 1, 0], [1, 1, 1, 1]])); // 2
console.log(countPyramids([[1, 1, 1], [1, 1, 1]])); // 2
console.log(countPyramids([[1, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 1, 0, 0, 1]])); // 13
