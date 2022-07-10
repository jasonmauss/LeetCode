// Solution for: https://leetcode.com/problems/unique-paths-iii/
var uniquePathsIII = function (grid) {
    if (grid == null || grid.length === 0)
        return 0;
    var h = grid.length;
    var w = grid[0].length;
    var dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    var start;
    var end;
    var emptyCount = 1;
    var result = 0;
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            if (grid[i][j] === 0)
                emptyCount++;
            else if (grid[i][j] === 1)
                start = [i, j];
            else if (grid[i][j] === 2)
                end = [i, j];
        }
    }
    var go = function (x, y, count) {
        if (grid[x][y] === -1 || grid[x][y] === Infinity)
            return;
        if (x === end[0] && y === end[1]) {
            if (count === emptyCount)
                result++;
            return;
        }
        grid[x][y] = Infinity;
        for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
            var _a = dirs_1[_i], di = _a[0], dj = _a[1];
            var i = x + di;
            var j = y + dj;
            if (i < 0 || i >= h || j < 0 || j >= w)
                continue;
            go(i, j, count + 1);
        }
        grid[x][y] = 0;
    };
    go(start[0], start[1], 0);
    return result;
};
// some test cases
console.log(uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]])); // 2
console.log(uniquePathsIII([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]])); // 4
console.log(uniquePathsIII([[0, 1], [2, 0]])); // 0
